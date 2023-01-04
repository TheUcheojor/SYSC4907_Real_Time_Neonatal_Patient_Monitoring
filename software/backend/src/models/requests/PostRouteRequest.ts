import { Request } from "express";
import RouteMeasurementDataPoint from "../RouteMeasurementDataPoint";

export interface PostRouteRequest extends Request {
    owner_id?: string;
    route_segments?: RouteSegment[];
}

interface RouteSegment {
    segment_type: string;
    route_measurement_datapoints: RouteMeasurementDataPoint[]
}