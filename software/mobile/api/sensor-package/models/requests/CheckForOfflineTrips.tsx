/**
 * Author: Paul Okenne
 * File: CheckForOfflineTripsRequest
 * Purpose: Exports the check-for-offline-trips request and response
 */

import MeasurementPacket from "../MeasurementPacket";
import { BaseRequest } from "./BaseRequest";
import { BaseResponse } from "./BaseResponse";
import { RequestType } from "./RequestType";

export class CheckForOfflineTripsRequest extends BaseRequest {
  /**
   * The CheckForOfflineTripsRequest constructor
   */
  constructor() {
    super(RequestType.CHECK_FOR_OFFLINE_TRIPS);
  }
}

export interface CheckForOfflineTripsResponse extends BaseResponse {
  /**
   * The offline trips
   */
  readonly offlineTrips: Array<Array<MeasurementPacket>>;
}
