import RouteMeasurementDataPoint from "../RouteMeasurementDataPoint";
import { AuthenticatedRequest } from "./AuthRequests";

export interface PostRouteRequest extends AuthenticatedRequest {
  patient_id?: number;
  start_time_s?: number;
  end_time_s?: number;
  route_segments?: RouteSegment[];
}

interface RouteSegment {
  segment_type: string;
  start_time_s?: number;
  end_time_s?: number;
  route_measurement_datapoints: RouteMeasurementDataPoint[];
}
