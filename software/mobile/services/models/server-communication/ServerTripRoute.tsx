/**
 * Author: Paul Okenne
 * File: ServerTripRoute
 * Purpose: Exports the schema for a server route object
 */

import TripRoute from "../trips/Route";

export default interface ServerTripRoute extends TripRoute {
  ownerId: string;
  organizationId: string;
  totalVibrationExposure: number;
  avgTemperature: number;
  avgNoise: number;
  avgPressure: number;
  avgVibration: number;
  avgVelocity: number;
}
