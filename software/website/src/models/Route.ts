export default interface Route {
  route_id: string;
  owner_id: string;
  organization_id: string;
  start_time: number;
  end_time: number;
  total_vibration_exposure: number;
  avg_temperature: number;
  avg_noise: number;
  avg_vibration: number;
  avg_velocity: number;
  avg_pressure: number;
}
