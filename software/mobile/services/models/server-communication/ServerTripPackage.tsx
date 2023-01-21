/**
 * Author: Paul Okennne
 * File: ServerTripPackage
 * Purpose: Exports the trip package model sent to server
 */

import TripRoute from "../trips/Route";
import RouteMeasurementDataPoint from "../trips/RouteMeasurementDataPoint";
import RouteSegment from "../trips/RouteSegment";

export interface ServerTripPackage {
  route: TripRoute;
  segments: RouteSegment[];
  routeMeasurementDataPoints: RouteMeasurementDataPoint[];
}
