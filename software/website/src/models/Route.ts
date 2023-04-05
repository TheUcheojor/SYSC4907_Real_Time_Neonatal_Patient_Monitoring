export default interface Route {
  route_id: string;
  owner_id: string;
  patient_id: string;
  organization_id: string;
  start_time_s: number;
  end_time_s: number;
  total_vibration: number;
  avg_temperature: number;
  avg_noise: number;
  avg_vibration: number;
  avg_velocity: number;
  avg_pressure: number;
}
