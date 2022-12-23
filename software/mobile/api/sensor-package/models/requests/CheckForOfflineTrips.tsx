/**
 * Author: Paul Okenne
 * File: CheckForOfflineTripsRequest
 * Purpose: Exports the check-for-offline-trips request
 */

import MeasurementPacket from "../MeasurementPacket";
import { BaseRequest } from "./BaseRequest";
import { BaseResponse } from "./BaseResponse";
import { RequestType } from "./RequestType";

export interface CheckForOfflineTripsResponse extends BaseResponse {
  /**
   * The offline trips
   */
  offlineTrips: Array<Array<MeasurementPacket>>;
}
