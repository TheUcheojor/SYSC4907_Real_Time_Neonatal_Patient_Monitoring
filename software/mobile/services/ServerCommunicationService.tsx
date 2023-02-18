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

export class ServerCommnunicationService {
  /**
   * The server commnuincation service instance
   */
  private static serverCommnunicationService: ServerCommnunicationService;

  /**
   * The API url
   */
  private static API_URL: string = "http://192.168.100.100:7001";

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
    }).then(async (response: Response) => {
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
          LoggerService.log("status: ", response.status);
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
        LoggerService.warn(error);
        return {
          isSuccessful: false,
          message: "",
          deletedTripRouteId: -1,
        };
      });
  }

  // public routeSearch(
  //   tripProperty: string,
  //   comparisonOperator: string,
  //   threshold: string | number
  // ): {
  //   getUserSession()
  //     .then()
  //     .catch((error: any) => {
  //       LoggerService.warn(error);
  //       return [];
  //     });
  //   // selectedTripProperty, selectedComparsionOperator, threshold
  // }
}
