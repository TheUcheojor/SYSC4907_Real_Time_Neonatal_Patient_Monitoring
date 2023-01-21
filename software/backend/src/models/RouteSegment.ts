import RouteMeasurementDataPoint from "./RouteMeasurementDataPoint";

export default interface RouteSegment {
  segment_type: string;
  start_time_s: number;
  end_time_s: number;
  route_measurement_datapoints: RouteMeasurementDataPoint[];
}
