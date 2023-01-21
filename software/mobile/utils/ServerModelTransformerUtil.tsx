/**
 * Author: Paul Okenne
 * File: SeverModelTransformerUtil
 * Purpose: Exports functions that transfroms mobile-app models to server models
 */

import {PostRouteRequest} from "../services/models/server-communication/requests/PostRouteRequest";
import TripRoute from "../services/models/trips/Route";
import RouteMeasurementDataPoint from "../services/models/trips/RouteMeasurementDataPoint";
import RouteSegment from "../services/models/trips/RouteSegment";
import { getTimeStringToUnixTimestamp } from "./TimeUtil";

export const generateServerRouteModel = (
  route: TripRoute,
  segments: RouteSegment[],
  routeMeasurementDataPoints: RouteMeasurementDataPoint[]
): PostRouteRequest => {
  return {
    patient_id: -1,
    start_time_s: getTimeStringToUnixTimestamp(route.startTime),
    end_time_s: getTimeStringToUnixTimestamp(route.endTime),
    route_segments?: ServerRouteSegment[],
    };
};
