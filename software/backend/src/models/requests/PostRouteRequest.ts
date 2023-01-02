import { Request } from "express";
import RouteMeasurementDataPoint from "../RouteMeasurementDataPoint";

export interface PostRouteRequest extends Request {
    ownerId?: string;
    routeSegments?: RouteSegment[];
}

interface RouteSegment {
    segment_type: string;
    routeMeasurementDataPoints: RouteMeasurementDataPoint[]
}