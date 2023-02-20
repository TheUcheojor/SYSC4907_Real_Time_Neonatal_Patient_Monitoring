/**
 * Author: Paul Okenne
 * File: StartTripRequest
 * Purpose: Contains the start trip request
 */

import { BaseRequest } from "./BaseRequest";
import { SensorPackageRequestType } from "./RequestType";

export default class StartTripRequest extends BaseRequest {
  /**
   * The StartTripRequest constructor
   */
  constructor() {
    super(SensorPackageRequestType.START_TRIP);
  }
}
