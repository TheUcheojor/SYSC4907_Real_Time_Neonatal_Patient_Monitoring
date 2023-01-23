/**
 * Author: Paul Okenne
 * File: SeverModelTransformerUtil
 * Purpose: Exports functions that transfroms mobile-app models to server models
 */

import { ServerUploadRouteRequest } from "../services/models/server-communication/requests/UploadRouteRequestResponse";
import TripRoute from "../services/models/trips/Route";
import RouteMeasurementDataPoint from "../services/models/trips/RouteMeasurementDataPoint";
import RouteSegment, {
  RouteSegmentType,
} from "../services/models/trips/RouteSegment";
import { getTimeStringToUnixTimestamp } from "./TimeUtil";

/**
 * Give a route, segments, and data points, generate a post route request
 * @param route the route
 * @param segments the segments
 * @param routeMeasurementDataPoints the data points
 * @returns the post route request
 */
export const generateServerRouteModel = (
  route: TripRoute,
  segments: RouteSegment[],
  routeMeasurementDataPoints: RouteMeasurementDataPoint[]
): ServerUploadRouteRequest => {
  console.log(routeMeasurementDataPoints);
  return {
    patient_id: -1,
    start_time_s: getTimeStringToUnixTimestamp(route.startTime),
    end_time_s: getTimeStringToUnixTimestamp(route.endTime),
    route_segments: segments.map((segment: RouteSegment) => {
      return {
        segment_type: getServerSegmentType(segment.segmentType),
        start_time_s: getTimeStringToUnixTimestamp(segment.startTime),
        end_time_s: getTimeStringToUnixTimestamp(segment.endTime),
        route_measurement_datapoints: routeMeasurementDataPoints
          .filter(
            (routeMeasurementDataPoint: RouteMeasurementDataPoint) =>
              routeMeasurementDataPoint.segmentId == segment.segmentId
          )
          .map((routeMeasurementDataPoint: RouteMeasurementDataPoint) => {
            return {
              time_s: getTimeStringToUnixTimestamp(
                routeMeasurementDataPoint.time as string
              ),
              velocity_kmps: routeMeasurementDataPoint.velocity,
              noise_db: routeMeasurementDataPoint.noise,
              vibration: routeMeasurementDataPoint.vibration,
              temperature_celsius: routeMeasurementDataPoint.temperature,
              pressure_pascals: routeMeasurementDataPoint.airPressure,
              annotation: routeMeasurementDataPoint.annotation
                ? routeMeasurementDataPoint.annotation
                : "",
              latitude: routeMeasurementDataPoint.location.latitude,
              longitude: routeMeasurementDataPoint.location.longitude,
            };
          }),
      };
    }),
  };
};

/**
 * The server's segement type
 */
enum ServerSegmentType {
  AERIAL = "aerial",
  ROAD = "road",
  BOAT = "boat",
}

const getServerSegmentType = (routeSegementType: RouteSegmentType) => {
  switch (routeSegementType) {
    case RouteSegmentType.AERIAL:
      return ServerSegmentType.AERIAL;
    case RouteSegmentType.GROUND:
      return ServerSegmentType.ROAD;
    case RouteSegmentType.WATER:
      return ServerSegmentType.BOAT;
  }
};
