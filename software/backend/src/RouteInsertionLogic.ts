import Route from "models/Route";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";
import RouteSegment from "models/RouteSegment";

export function getRouteStats(segments: RouteSegment[]) {
  let total_vibration = 0;
  let avg_temperature = 0;
  let avg_noise = 0;
  let avg_vibration = 0;
  let avg_velocity = 0;
  let avg_pressure = 0;
  let num_dps = 0;
  let min_time_s, max_time_s;

  for (let i = 0; i < segments.length; i++) {
    let segDps = segments[i].route_measurement_datapoints;
    num_dps += segDps.length;

    for (let j = 0; j < segDps.length; j++) {
      if (min_time_s === undefined || min_time_s > segDps[j].time_s)
        min_time_s = segDps[j].time_s;
      if (max_time_s === undefined || max_time_s < segDps[j].time_s)
        max_time_s = segDps[j].time_s;

      total_vibration += segDps[j].vibration;
      avg_temperature += segDps[j].temperature_celsius;
      avg_noise += segDps[j].noise_db;
      avg_vibration += segDps[j].vibration;
      avg_velocity += segDps[j].velocity_kmps;
      avg_pressure += segDps[j].pressure_pascals;
    }
  }

  avg_temperature /= num_dps;
  avg_noise /= num_dps;
  avg_vibration /= num_dps;
  avg_velocity /= num_dps;
  avg_pressure /= num_dps;

  return {
    avg_temperature,
    avg_noise,
    avg_vibration,
    avg_velocity,
    avg_pressure,
    total_vibration,
    max_time_s,
    min_time_s,
  };
}

export function getSegmentInsertionValues(
  segments: RouteSegment[],
  routeId: number
): any[][] {
  return segments.map((seg) => {
    return [routeId, seg.segment_type, seg.start_time_s, seg.end_time_s];
  });
}

export function getDatapointInsertionValues(
  datapoints: RouteMeasurementDataPoint[],
  routeId: number,
  segmentId: number
): any[][] {
  return datapoints.map((dp) => {
    return [
      routeId,
      segmentId,
      dp.time_s,
      dp.velocity_kmps,
      dp.noise_db,
      dp.vibration,
      dp.temperature_celsius,
      dp.pressure_pascals,
      dp.annotation,
      dp.latitude,
      dp.longitude,
    ];
  });
}
