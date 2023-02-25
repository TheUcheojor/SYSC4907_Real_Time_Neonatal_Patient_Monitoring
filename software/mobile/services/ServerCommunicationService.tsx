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
  LoginRequest,
  LoginResponse,
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

export class ServerCommnunicationService {
  /**
   * The server commnuincation service instance
   */
  private static serverCommnunicationService: ServerCommnunicationService;

  /**
   * A flag indicating whether the server is communicatating with the production backend
   */
  private static productionFlag: boolean = false;
  /**
   * The API url - http://192.168.100.100:7001
   */
  private static API_URL: string = !ServerCommnunicationService.productionFlag
    ? "http://192.168.100.100:7001"
    : "http://100.25.144.98:3001";

  /**
   * The private ServerCommnunicationService constructor
   */
  private constructor() {}

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
        Alert.alert("Error", error);
        LoggerService.warn(error);
        return {
          isSuccessful: false,
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
        }).then((response: Response) => {
          LoggerService.info("status: ", response.status);
          const isSuccessful: boolean =
            response.status == HttpStatusCode.OK_REQUEST;

          return {
            isSuccessful: isSuccessful,
            message: "",
            deletedTripRouteId: tripId,
          };
        });
      })
      .catch((error: any) => {
        Alert.alert("Error", error);
        LoggerService.warn(error);
        return {
          isSuccessful: false,
          message: "",
          deletedTripRouteId: -1,
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
    tripProperty: string,
    comparisonOperator: string,
    threshold: string | number,
    page: number = 1,
    limit: number = 5
  ): Promise<ServerRouteSearchResponse> {
    return this.getUserSession()
      .then((userSession: UserSession) => {
        return fetch(
          `${ServerCommnunicationService.API_URL}/routes?route_metric_key=${tripProperty}&comparison_operator=${comparisonOperator}&threshold=${threshold}&page=${page}&limit=${limit}`,
          {
            method: HttpRequestType.GET,
            headers: {
              Authorization: userSession.authenticationToken,
            },
          }
        ).then((response: Response) => {
          if (response.status != HttpStatusCode.OK_REQUEST) {
            throw new Error(CommunicationError.FETCHING_ERROR);
          }

          return response.json();
        });
      })
      .then((result: { totalRoutes: number; routes: ServerTripRoute[] }) => {
        console.log(result);
        return {
          ...result,
          isSuccessful: true,
        };
      })
      .catch((error: any) => {
        Alert.alert(
          CommunicationError.SERVER_COMMUNICATION_ERROR,
          CommunicationError.FETCHING_ERROR
        );

        LoggerService.warn(error);
        return {
          routes: [],
          totalRoutes: -1,
          isSuccessful: false,
          message: error as string,
        };
      });
  }

  /**
   * Throw an error if the reponse status is not 200.
   * Otherwise returns the response body
   */
  private validateValidResponse(response: Response): Promise<any> {
    if (response.status != HttpStatusCode.OK_REQUEST) {
      throw new Error(
        response.status + ". " + CommunicationError.SERVER_COMMUNICATION_ERROR
      );
    }

    return response.json();
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
          CommunicationError.SERVER_COMMUNICATION_ERROR,
          CommunicationError.FETCHING_ERROR
        );

        LoggerService.error(error);
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
          CommunicationError.SERVER_COMMUNICATION_ERROR,
          CommunicationError.FETCHING_ERROR
        );

        LoggerService.error(error);
        return [];
      });
  }
}
