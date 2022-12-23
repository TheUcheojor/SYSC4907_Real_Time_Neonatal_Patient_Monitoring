/**
 * Author: Paul Okenne
 * File: BaseRequest
 * Purpose: Exports the base request for sensor package communication
 *
 */

import { RequestType } from "./RequestType";

export interface BaseRequest {
  /**
   * The request type
   */
  requestType: RequestType;

  //   /**
  //    * The BaseRequest constructor
  //    * @param requestType the request type
  //    */
  //   constructor(requestType: RequestType) {
  //     this.requestType = requestType;
  //   }

  //   /**
  //    * Returns the request type
  //    * @returns the request type
  //    */
  //   public getRequestType(): RequestType {
  //     return this.requestType;
  //   }

  //   /**
  //    * Sets the requestType
  //    * @param requestType the requestType
  //    */
  //   public setRequestType(requestType: RequestType) {
  //     this.requestType = requestType;
  //   }
}
