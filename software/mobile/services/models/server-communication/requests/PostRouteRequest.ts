import ServerRouteMeasurementDataPoint from "../ServerRouteMeasurementDataPoint";

export interface PostRouteRequest {
  patient_id?: number;
  start_time_s?: number;
  end_time_s?: number;
  route_segments?: ServerRouteSegment[];
}

export interface ServerRouteSegment {
  segment_type: string;
  start_time_s?: number;
  end_time_s?: number;

  route_measurement_datapoints: ServerRouteMeasurementDataPoint[];
}
