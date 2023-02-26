/**
 * Author: Paul Okenne
 * File: SeverModelTransformerUtil
 * Purpose: Exports functions that transfroms mobile-app models to server models
 */

import { ServerUploadRouteRequest } from "../services/models/server-communication/requests/UploadRouteRequestResponse";
import ServerRouteMeasurementDataPoint from "../services/models/server-communication/ServerRouteMeasurementDataPoint";
import {
  ServerRouteSegment,
  ServerRouteSegmentType,
} from "../services/models/server-communication/ServerRouteSegment";
import ServerTripRoute from "../services/models/server-communication/ServerTripRoute";
import TripRoute, {
  TripRouteWithStatistics,
} from "../services/models/trips/Route";
import RouteMeasurementDataPoint from "../services/models/trips/RouteMeasurementDataPoint";
import RouteSegment, {
  RouteSegmentType,
} from "../services/models/trips/RouteSegment";
import {
  covertTimeStringToUnixTimestamp,
  formatUnixTimestamp,
} from "./TimeUtil";

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
    patient_id: route.patientId,
    start_time_s: covertTimeStringToUnixTimestamp(route.startTime),
    end_time_s: covertTimeStringToUnixTimestamp(route.endTime),
    route_segments: segments.map((segment: RouteSegment) => {
      return {
        segment_type: getServerSegmentType(segment.segmentType),
        start_time_s: covertTimeStringToUnixTimestamp(segment.startTime),
        end_time_s: covertTimeStringToUnixTimestamp(segment.endTime),
        route_measurement_datapoints: routeMeasurementDataPoints
          .filter(
            (routeMeasurementDataPoint: RouteMeasurementDataPoint) =>
              routeMeasurementDataPoint.segmentId == segment.segmentId
          )
          .map((routeMeasurementDataPoint: RouteMeasurementDataPoint) => {
            return {
              route_data_point_id: -1,
              route_id: routeMeasurementDataPoint.routeId,
              segment_id: routeMeasurementDataPoint.segmentId,
              time_s: covertTimeStringToUnixTimestamp(
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
 * Generate the mobile route from the server models
 * @param serverTripRoute the server data points
 * @returns the mobile data points
 */
export const generateMobileTripRoutes = (
  serverTripRoute: ServerTripRoute
): TripRouteWithStatistics => {
  return {
    routeId: serverTripRoute.route_id,

    patientId: serverTripRoute.patient_id,

    startTime: formatUnixTimestamp(serverTripRoute.start_time_s),

    endTime: formatUnixTimestamp(serverTripRoute.end_time_s),

    ...serverTripRoute,
  };
};

/**
 * Generate the mobile route measure data points from the server models
 * @param serverDataPoints the server data points
 * @returns the mobile data points
 */
export const generateMobileDataPoints = (
  serverDataPoints: ServerRouteMeasurementDataPoint[]
): RouteMeasurementDataPoint[] => {
  return serverDataPoints.map(
    (serverDataPoint: ServerRouteMeasurementDataPoint) => {
      return {
        routeMeasurementDataPointId: serverDataPoint.route_data_point_id,
        segmentId: serverDataPoint.segment_id,
        routeId: serverDataPoint.route_id,
        annotation: serverDataPoint.annotation,
        noise: serverDataPoint.noise_db,
        temperature: serverDataPoint.temperature_celsius,
        vibration: serverDataPoint.velocity_kmps,
        airPressure: serverDataPoint.pressure_pascals,
        velocity: serverDataPoint.velocity_kmps,
        battery: -1,
        time: formatUnixTimestamp(serverDataPoint.time_s),
        location: {
          longitude: serverDataPoint.longitude,
          latitude: serverDataPoint.latitude,
        },
      };
    }
  );
};

/**
 * Generate the mobile route segment from the server models
 * @param serverRouteSegments the server data points
 * @returns the mobile data points
 */
export const generateMobileRouteSegments = (
  serverRouteSegments: ServerRouteSegment[]
): RouteSegment[] => {
  return serverRouteSegments.map((serverRouteSegment: ServerRouteSegment) => {
    return {
      segmentId: serverRouteSegment.segment_id,
      segmentType: getMobileRouteSegmentType(serverRouteSegment.segment_type),
      routeId: serverRouteSegment.route_id,
      startTime: formatUnixTimestamp(serverRouteSegment.start_time_s),
      endTime: formatUnixTimestamp(serverRouteSegment.end_time_s),
    };
  });
};

/**
 * Given the mobile route segment type, generate the server's model
 * @param routeSegementType the mobile route segment type
 * @returns the server route segment type
 */
const getServerSegmentType = (
  routeSegementType: RouteSegmentType
): ServerRouteSegmentType => {
  switch (routeSegementType) {
    case RouteSegmentType.AERIAL:
      return ServerRouteSegmentType.AERIAL;
    case RouteSegmentType.GROUND:
      return ServerRouteSegmentType.ROAD;
    case RouteSegmentType.WATER:
      return ServerRouteSegmentType.BOAT;
  }
};

/**
 * Given the server route segment type, generate the mobile's model
 * @param serverRouteSegment the server route segment type
 * @returns the mobile route segment type
 */
const getMobileRouteSegmentType = (
  serverRouteSegment: ServerRouteSegmentType
): RouteSegmentType => {
  switch (serverRouteSegment) {
    case ServerRouteSegmentType.AERIAL:
      return RouteSegmentType.AERIAL;
    case ServerRouteSegmentType.BOAT:
      return RouteSegmentType.WATER;

    case ServerRouteSegmentType.ROAD:
      return RouteSegmentType.GROUND;
  }
};
