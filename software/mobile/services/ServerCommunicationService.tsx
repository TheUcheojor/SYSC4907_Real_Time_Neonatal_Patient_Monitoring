/**
 * Author: Paul Okenne
 * File: ServerCommnunicationService.tsx
 * Purpose: Exports a singleton class that enables communication with server
 */

import { Platform } from "react-native";
import { SecureStore } from "expo";

import * as HttpConstants from "./constants/http-constants";
import { HttpRequestType } from "./constants/HttpRequestType";
import { HttpStatusCode } from "./constants/HttpStatusCode";
import {
  LoginRequest,
  LoginResponse,
} from "./models/server-communication/AuthenticationModels";
import { BaseServerResponse } from "./models/server-communication/ServerResponses";
import { HttpHeaderKey } from "./constants/HttpHeaderKey";
import UserSessionService from "./UserSessionService";

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
   * The authorization token
   */
  private authorizationToken: string | null = "";

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
        "Content-Type": HttpConstants.JSON_APPLICATION_CONTENT_TYPE,
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
}
