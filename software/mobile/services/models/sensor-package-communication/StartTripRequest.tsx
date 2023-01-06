/**
 * Author: Paul Okenne
 * File: StartTripRequest
 * Purpose: Contains the start trip request
 */

import { BaseRequest } from "./BaseRequest";
import { RequestType } from "./RequestType";

export default class StartTripRequest extends BaseRequest {
  /**
   * The StartTripRequest constructor
   */
  constructor() {
    super(RequestType.START_TRIP);
  }
}