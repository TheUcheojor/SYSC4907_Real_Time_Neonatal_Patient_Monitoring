/**
 * Author: Paul Okenne
 * File: ServerRoute
 * Purpose: Exports the schema for a server route object
 */

import TripRoute from "../trips/Route";

export default interface ServerRoute extends TripRoute {
  ownerId: string;
  organizationId: string;
  totalVibrationExposed: number;
  avgTemperature: number;
  avgNoise: number;
  avgPressure: number;
  avgVibration: number;
  avgVelocity: number;
}
