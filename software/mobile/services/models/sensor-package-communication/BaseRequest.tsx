/**
 * Author: Paul Okenne
 * File: BaseRequest
 * Purpose: Exports the base request for sensor package communication
 *
 */

import { RequestType } from "./RequestType";

export interface BaseRequestInterface {
  /**
   * The request type
   */
  readonly requestType: RequestType;

  /**
   * The time at which the request was sent
   */
  readonly timestamp: number;
}

export class BaseRequest implements BaseRequestInterface {
  /**
   * The request type
   */
  public readonly requestType: RequestType;

  /**
   * The time stamp
   */
  public readonly timestamp: number;

  /**
   * The BaseRequest constructor
   * @param requestType the request type
   */
  constructor(requestType: RequestType) {
    this.requestType = requestType;
    this.timestamp = Date.now();
  }

  /**
   * Generate a request object
   * @returns a request object
   */
  public generateObject(): {} {
    return {
      requestType: this.requestType,
    };
  }
}
