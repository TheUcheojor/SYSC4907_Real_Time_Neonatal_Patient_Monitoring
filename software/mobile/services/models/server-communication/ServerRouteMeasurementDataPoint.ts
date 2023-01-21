/**
 * Author: Ryan Fife & Paul Okenne
 * File: ServerRoute
 * Purpose: exports server route measurement data point model
 */
export default interface RouteMeasurementDataPoint {
  time_s: number;
  velocity_kmps: number;
  noise_db: number;
  vibration: number;
  temperature_celsius: number;
  pressure_pascals: number;
  annotation: string;
  latitude: number;
  longitude: number;
}
