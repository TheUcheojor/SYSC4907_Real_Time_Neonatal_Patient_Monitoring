/**
 * Author: Paul Okenne
 * File: ServerCommnunicationService.tsx
 * Purpose: Exports a singleton class that enables communication with server
 */

import { Platform } from "react-native";

import { JSON_APPLICATION_CONTENT_TYPE } from "./constants/HttpHeaderProperties";
import { HttpRequestType } from "./constants/HttpRequestType";
import { HttpStatusCode } from "./constants/HttpStatusCode";
import {
  LoginRequest,
  LoginResponse,
} from "./models/server-communication/AuthenticationModels";
import { BaseServerResponse } from "./models/server-communication/requests/ServerResponses";
import { HttpHeaderKey } from "./constants/HttpHeaderProperties";
import UserSessionService, { UserSession } from "./UserSessionService";
import { ServerTripPackage } from "./models/server-communication/ServerTripPackage";

export class ServerCommnunicationService {
  /**
   * The server commnuincation service instance
   */
  private static serverCommnunicationService: ServerCommnunicationService;

  /**
   * The API url
   */
  private static API_URL: string = "http://192.168.100.100:3001";

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
   * Upload a trip to the server
   * @param serverTripPackage the server trip package
   * @returns the server response
   */
  public uploadTrip(
    serverTripPackage: ServerTripPackage
  ): Promise<BaseServerResponse> {
    return UserSessionService.loadUserSession().then(
      (userSession: UserSession | null) => {
        if (!userSession)
          return {
            isSuccessful: false,
            message: "User session has expired",
          };

        return fetch(`${ServerCommnunicationService.API_URL}/routes`, {
          method: HttpRequestType.POST,
          headers: {
            "Content-Type": JSON_APPLICATION_CONTENT_TYPE,
            Authorization: userSession.authenticationToken,
          },
          body: JSON.stringify(serverTripPackage),
        }).then((response: Response) => {
          const isSuccessful: boolean =
            response.status == HttpStatusCode.OK_REQUEST;

          return {
            isSuccessful: isSuccessful,
            message: "",
          };
        });
      }
    );
  }
}
