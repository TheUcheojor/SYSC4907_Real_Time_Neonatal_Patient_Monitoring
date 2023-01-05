import RouteMeasurementDataPoint from "../RouteMeasurementDataPoint";
import { AuthenticatedRequest } from "./AuthRequests";

export interface PostRouteRequest extends AuthenticatedRequest {
  route_segments?: RouteSegment[];
}

interface RouteSegment {
  segment_type: string;
  route_measurement_datapoints: RouteMeasurementDataPoint[];
}
