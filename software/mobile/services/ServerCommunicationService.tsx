/**
 * Author: Paul Okenne
 * File: ServerCommnunicationService.tsx
 * Purpose: Exports a singleton class that enables communication with server
 */

import { Platform } from "react-native";
import * as HttpConstants from "./constants/http-constants";
import { HTTP_OK_SUCCESS_STATUS_CODE } from "./constants/http-constants";
import { HttpRequestType } from "./constants/HttpRequestType";
import { HttpStatusCode } from "./constants/HttpStatusCode";
import { LoginRequest } from "./models/server-communication/AuthenticationRequests";
import { BaseServerResponse } from "./models/server-communication/ServerResponses";

export class ServerCommnunicationService {
  /**
   * The server commnuincation service instance
   */
  private static serverCommnunicationService: ServerCommnunicationService;

  /**
   * The API url
   */
  private static API_URL: string =
    Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";

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
   * Sends a loging request
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
    }).then((response: Response) => {
      const isSuccessful: boolean =
        response.status == HttpStatusCode.OK_REQUEST;

      const message: string = !isSuccessful ? "Login failed!" : "";

      return {
        isSuccessful: isSuccessful,
        message: message,
      };
    });
  }
}
