/**
 * Author: Paul Okenne
 */

import { BaseRequest } from "./BaseRequest";
import { RequestType } from "./RequestType";

export interface BaseResponse extends BaseRequest {
  /**
   * A flag that indicates whether a request was successfull
   */
  operationSuccess: boolean;

  //   /**
  //    * The BaseResponse constructor
  //    * @param requestType
  //    */
  //   constructor(requestType: RequestType) {
  //     super(requestType);
  //   }

  //   public getOperationSuccess(): boolean {
  //     return this.operationSuccess;
  //   }

  //   public setOperationSuccess(operationSuccess: boolean) {
  //     this.operationSuccess = operationSuccess;
  //   }
}
