/**
 * Author: Ryan Fife & Paul Okenne
 * File: ServerRoute
 * Purpose: exports server route sengment model
 */

import RouteMeasurementDataPoint from "./ServerRouteMeasurementDataPoint";

export default interface RouteSegment {
  segment_type: string;
  start_time_s: number;
  end_time_s: number;
  route_measurement_datapoints: RouteMeasurementDataPoint[];
}
