import { Request } from "express";
import RouteMeasurementDataPoint from "../RouteMeasurementDataPoint";

export interface AuthenticatedRequest extends Request {
    user_id?: string
}

export interface PostRouteRequest extends AuthenticatedRequest {
    route_segments?: RouteSegment[];
}

interface RouteSegment {
    segment_type: string;
    route_measurement_datapoints: RouteMeasurementDataPoint[]
}