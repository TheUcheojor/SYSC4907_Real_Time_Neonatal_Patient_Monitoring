/**
 * Author: Paul Okenne
 * File: ServerCommnunicationService.tsx
 * Purpose: Exports a singleton class that enables communication with server
 */

import LoggerService from "./LoggerService";
import { JSON_APPLICATION_CONTENT_TYPE } from "./constants/HttpHeaderProperties";
import { HttpRequestType } from "./constants/HttpRequestType";
import { HttpStatusCode } from "./constants/HttpStatusCode";
import {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  SignupRequest,
} from "./models/server-communication/requests/authenticationRequestsResponses";
import { BaseServerResponse } from "./models/server-communication/requests/BaseServerResponse";
import { HttpHeaderKey } from "./constants/HttpHeaderProperties";
import UserSessionService, { UserSession } from "./UserSessionService";
import { ServerTripPackage } from "./models/server-communication/ServerTripPackage";
import {
  ServerUploadRouteRequest,
  ServerUploadRouteResponse,
} from "./models/server-communication/requests/UploadRouteRequestResponse";
import { CommunicationError } from "./models/error-handling/CommunicationError";
import ServerTripRoute from "./models/server-communication/ServerTripRoute";
import { Alert } from "react-native";
import { ServerRouteSearchResponse } from "./models/server-communication/requests/RouteSearchResponse";
import ServerRouteMeasurementDataPoint from "./models/server-communication/ServerRouteMeasurementDataPoint";
import {
  generateMobileDataPoints,
  generateMobileRouteSegments,
} from "../utils/ServerModelTransformerUtil";
import RouteMeasurementDataPoint from "./models/trips/RouteMeasurementDataPoint";
import { ServerRouteSegment } from "./models/server-communication/ServerRouteSegment";
import RouteSegment from "./models/trips/RouteSegment";
import { SYSTEM_CONFIGURATION } from "../global/SystemConfiguration";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";

export class ServerCommnunicationService {
  /**
   * The server commnuincation service instance
   */
  private static serverCommnunicationService: ServerCommnunicationService;

  /**
   * The local IP address
   *
   * Keep in mind that your local ip address is not your computer's 'localhost'.
   * Rather, it is the IP address of the network you are logged into.
   */
  private static LOCAL_IP_ADDRESS: string = "http://192.168.100.102:7001";

  /**
   * The PRODUCTION address
   */
  private static PRODUCTION_IP_ADDRESS: string = "http://100.26.151.54:80";

  /**
   * The API url - http://192.168.100.102:7001
   */
  private static API_URL: string = !SYSTEM_CONFIGURATION.PRODUCTION_SERVER_FLAG
    ? ServerCommnunicationService.LOCAL_IP_ADDRESS
    : ServerCommnunicationService.PRODUCTION_IP_ADDRESS;

  /**
   * The view navigator
   */
  private static navigation: NavigationContainerRefWithCurrent<RootStackParamList> | null =
    null;

  /**
   * The private ServerCommnunicationService constructor
   */
  private constructor() {}

  /**
   * Setup the Server Communication Service
   */
  public static init(
    navigation: NavigationContainerRefWithCurrent<RootStackParamList>
  ) {
    ServerCommnunicationService.navigation = navigation;
  }

  /**
   * @returns the single instance of server communication service
   */
  public static getServerCommunicationService(): ServerCommnunicationService {
    if (!this.serverCommnunicationService) {
      this.serverCommnunicationService = new ServerCommnunicationService();
    }
    return this.serverCommnunicationService;
  }

  /**
   * Sends a login request
   * @param loginRequest the login request body
   * @returns the server response
   */
  public login(loginRequest: LoginRequest): Promise<BaseServerResponse> {
    return fetch(`${ServerCommnunicationService.API_URL}/login`, {
      method: HttpRequestType.POST,
      headers: {
        "Content-Type": JSON_APPLICATION_CONTENT_TYPE,
      },
      body: JSON.stringify(loginRequest),
    })
      .then(async (response: Response) => {
        console.log("status: ", response.status);
        const isSuccessful: boolean =
          response.status == HttpStatusCode.OK_REQUEST;

        const message: string = !isSuccessful ? "Login failed!" : "";

        if (isSuccessful) {
          const responseBody: LoginResponse = await response.json();

          UserSessionService.saveUserSession({
            fullName: responseBody.full_name,
            email: loginRequest.email.trim().toLowerCase(),
            authenticationToken: response.headers.get(
              HttpHeaderKey.AUTHORIZATION_KEY
            ) as string,
          });
        }

        return {
          isSuccessful: isSuccessful,
          message: message,
        };
      })
      .catch((error: any) => {
        LoggerService.warn(
          CommunicationError.AUTHENTICATION_ERROR + ": " + error
        );
        return {
          isSuccessful: false,
          message: "login failed",
        };
      });
  }

  /**
   * Sign up a user
   * @param signUpRequest
   * @returns
   */
  public signUp(signUpRequest: SignupRequest): Promise<BaseServerResponse> {
    return fetch(`${ServerCommnunicationService.API_URL}/user`, {
      method: HttpRequestType.POST,
      headers: {
        "Content-Type": JSON_APPLICATION_CONTENT_TYPE,
      },
      body: JSON.stringify(signUpRequest),
    }).then(async (response: Response) => {
      const isSuccessful: boolean =
        response.status == HttpStatusCode.OK_REQUEST;

      console.log("Sign up - response status: ", response.status);

      if (isSuccessful) {
        // We login to retreive an authorization token
        await this.login({
          email: signUpRequest.email,
          password: signUpRequest.password,
        });

        return {
          isSuccessful: true,
          message: "",
        };
      }

      return {
        isSuccessful: false,
        message: "Sign-up failed",
      };
    });
  }

  /**
   * Fetchs the user's session
   * @returns the UserSession
   */
  private getUserSession(): Promise<UserSession> {
    return UserSessionService.loadUserSession().then(
      (userSession: UserSession | null) => {
        if (!userSession) throw new Error(CommunicationError.SESSION_EXPIRED);

        return userSession;
      }
    );
  }

  /**
   * Throw an error if the reponse status is not 200.
   * Otherwise returns the response body.
   *
   * This funtion will also log the user out if the request receives
   * an unauthorized response
   */
  private validateValidResponse(response: Response): Promise<any> {
    console.log("response.status: ", response.status);

    // If the user's token expires, the user is logged out
    if (
      ServerCommnunicationService.navigation &&
      response.status == HttpStatusCode.UNAUTHORIZED
    ) {
      UserSessionService.deleteUserSession().then(() => {
        ServerCommnunicationService.navigation?.navigate("Login");
        Alert.alert("Session Timeout", "Session has expired");
      });
    }

    // Throw an error if the request status does not indicate success
    else if (response.status != HttpStatusCode.OK_REQUEST) {
      throw new Error(
        response.status + ". " + CommunicationError.SERVER_COMMUNICATION_ERROR
      );
    }

    //Depending on the response, return the json body or an empty promise
    const contentType = response.headers.get("content-type");
    if (contentType?.includes(JSON_APPLICATION_CONTENT_TYPE.toLowerCase())) {
      return response.json();
    }

    return Promise.resolve();
  }

  /**
   * Upload a trip to the server
   * @param serverPostRouteRequest the server trip package
   * @returns the server response
   */
  public uploadTrip(
    serverPostRouteRequest: ServerUploadRouteRequest,
    tripId: number
  ): Promise<ServerUploadRouteResponse> {
    return this.getUserSession()
      .then((userSession: UserSession) => {
        return fetch(`${ServerCommnunicationService.API_URL}/routes`, {
          method: HttpRequestType.POST,
          headers: {
            "Content-Type": JSON_APPLICATION_CONTENT_TYPE,
            Authorization: userSession.authenticationToken,
          },
          body: JSON.stringify(serverPostRouteRequest),
        })
          .then(this.validateValidResponse)
          .then((response: Response) => {
            return {
              isSuccessful: true,
              message: "",
              deletedTripRouteId: tripId,
            };
          });
      })
      .catch((error: any) => {
        Alert.alert(
          CommunicationError.UPLOADING_ERROR,
          CommunicationError.SERVER_INAVAILABILITY
        );

        LoggerService.warn(
          "Uploading Error: " +
            error +
            "\nRequest: " +
            JSON.stringify(serverPostRouteRequest)
        );
        return {
          isSuccessful: false,
          message: "",
          deletedTripRouteId: -1,
        };
      });
  }

  /**
   * Allows user to request for a new password
   *
   * Please note that this endpoint will always return the success flag as true.
   * The reason is to prevent attackers from learning from the system. However,
   * the errors will logged if the occured
   *
   *
   * @param serverPostRouteRequest the server trip package
   * @returns the server response
   */
  public forgotPassword(
    forgotPasswordRequest: ForgotPasswordRequest
  ): Promise<BaseServerResponse> {
    return fetch(`${ServerCommnunicationService.API_URL}/forgotPassword`, {
      method: HttpRequestType.POST,
      headers: {
        "Content-Type": JSON_APPLICATION_CONTENT_TYPE,
      },
      body: JSON.stringify(forgotPasswordRequest),
    })
      .then(this.validateValidResponse)
      .then((response: Response) => {
        return {
          isSuccessful: true,
        };
      })
      .catch((error: any) => {
        LoggerService.warn("Forgot passsword error: " + error);
        return {
          isSuccessful: true,
        };
      });
  }

  /**
   * Search for route
   * @param tripProperty the trip property
   * @param comparisonOperator the comparison operator
   * @param threshold the threshold
   * @param page the page (optional)
   * @param limit the limit of the number of routes (options)
   * @returns the search response
   */
  public routeSearch(
    query: string,
    page: number = 1,
    limit: number = 10
  ): Promise<ServerRouteSearchResponse> {
    const serverEndpoint: string = `${ServerCommnunicationService.API_URL}/routes?search_query=${query}&page=${page}&limit=${limit}`;
    LoggerService.debug("Search Endpoint: ", serverEndpoint);
    return this.getUserSession()
      .then((userSession: UserSession) => {
        return fetch(serverEndpoint, {
          method: HttpRequestType.GET,
          headers: {
            Authorization: userSession.authenticationToken,
          },
        });
      })
      .then(this.validateValidResponse)
      .then((result: { totalRoutes: number; routes: ServerTripRoute[] }) => {
        LoggerService.debug("Server search result: ", result);
        return {
          ...result,
          isSuccessful: true,
        };
      })
      .catch((error: any) => {
        Alert.alert(
          CommunicationError.SEARCH_FAILURE,
          CommunicationError.SERVER_INAVAILABILITY
        );

        LoggerService.warn(CommunicationError.SEARCH_FAILURE + ": " + error);
        return {
          routes: [],
          totalRoutes: -1,
          isSuccessful: false,
          message: error as string,
        };
      });
  }

  /**
   * Fetch the route measurement data points for the given id
   * @param routeId the route id
   * @returns route measurement data points
   */
  public fetchRouteMeasurementDataPointsByRouteId(
    routeId: number
  ): Promise<RouteMeasurementDataPoint[]> {
    return this.getUserSession()
      .then((userSession: UserSession) => {
        return fetch(
          `${ServerCommnunicationService.API_URL}/routeMeasurementDataPoints/${routeId}`,
          {
            method: HttpRequestType.GET,
            headers: {
              Authorization: userSession.authenticationToken,
            },
          }
        )
          .then(this.validateValidResponse)
          .then(
            (
              serverMeasurementDataPoints: ServerRouteMeasurementDataPoint[]
            ) => {
              return generateMobileDataPoints(serverMeasurementDataPoints);
            }
          );
      })
      .catch((error: any) => {
        Alert.alert(
          CommunicationError.FETCHING_ERROR,
          CommunicationError.SERVER_INAVAILABILITY
        );

        LoggerService.error(CommunicationError.FETCHING_ERROR + ": " + error);
        return [];
      });
  }

  /**
   * Fetch the route for the given id
   * @param routeId the route id
   * @returns route measurement data points
   */
  public fetchSegmentsByRouteId(routeId: number): Promise<RouteSegment[]> {
    return this.getUserSession()
      .then((userSession: UserSession) => {
        return fetch(
          `${ServerCommnunicationService.API_URL}/segments/${routeId}`,
          {
            method: HttpRequestType.GET,
            headers: {
              Authorization: userSession.authenticationToken,
            },
          }
        )
          .then(this.validateValidResponse)
          .then((serverRouteSegments: ServerRouteSegment[]) => {
            return generateMobileRouteSegments(serverRouteSegments);
          });
      })
      .catch((error: any) => {
        Alert.alert(
          CommunicationError.FETCHING_ERROR,
          CommunicationError.SERVER_COMMUNICATION_ERROR
        );

        LoggerService.error(CommunicationError.FETCHING_ERROR + ": " + error);
        return [];
      });
  }
}
