/**
 * Author: Paul Okenne
 * File: ServerTripRoute
 * Purpose: Exports the schema for a server route object
 */

import TripRoute from "../trips/Route";

export default interface ServerTripRoute {
  route_id: number;
  patient_id: string;
  organizationId: string;
  total_vibration: number;
  avg_temperature: number;
  avg_noise: number;
  avg_pressure: number;
  avg_vibration: number;
  avg_velocity: number;
  start_time_s: number;
  end_time_s: number;
}

export const isServerTripRoute = (
  obj: ServerTripRoute | TripRoute
): obj is ServerTripRoute => {
  return "patient_id" in obj;
};
