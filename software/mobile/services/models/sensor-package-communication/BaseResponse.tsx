/**
 * Author: Paul Okenne
 */

import { BaseRequest, BaseRequestInterface } from "./BaseRequest";
import { RequestType } from "./RequestType";

export interface BaseResponse extends BaseRequestInterface {
  /**
   * A flag that indicates whether a request was successfull
   */
  readonly operationSuccess: boolean;

  /**
   * Supporting message
   */
  readonly message: string | undefined;
}
