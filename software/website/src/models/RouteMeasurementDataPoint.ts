import { DatapointFieldEnum } from "constants/DatapointFieldEnum";

export default interface RouteMeasurementDataPoint {
  routeDataPointId: string;
  segmentId: string;
  [DatapointFieldEnum.route_id]: string;
  [DatapointFieldEnum.time_s]: number;
  [DatapointFieldEnum.velocity_kmps]: number;
  [DatapointFieldEnum.noise_db]: number;
  [DatapointFieldEnum.vibration]: number;
  [DatapointFieldEnum.temperature_celsius]: number;
  [DatapointFieldEnum.annotation]: string;
  [DatapointFieldEnum.latitude]: number;
  [DatapointFieldEnum.longitude]: number;
}
