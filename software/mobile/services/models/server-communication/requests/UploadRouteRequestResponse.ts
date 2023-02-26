/**
 * Author: Ryan & Paul
 * File: ServerUploadRouteRequest
 * Purpose: Exports the upload route request
 */
import ServerRouteMeasurementDataPoint from "../ServerRouteMeasurementDataPoint";
import { BaseServerResponse } from "./BaseServerResponse";

export interface ServerUploadRouteRequest {
  patient_id?: string;
  start_time_s?: number;
  end_time_s?: number;
  route_segments?: ServerRouteSegment[];
}

export interface ServerUploadRouteResponse extends BaseServerResponse {
  deletedTripRouteId: number;
}

export interface ServerRouteSegment {
  segment_type: string;
  start_time_s?: number;
  end_time_s?: number;
  route_measurement_datapoints: ServerRouteMeasurementDataPoint[];
}
