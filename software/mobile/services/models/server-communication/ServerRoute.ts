/**
 * Author: Ryan Fife & Paul Okenne
 * File: ServerRoute
 * Purpose: exports the server route model
 */

export default interface Route {
  routeId: string;
  ownerId: string;
  organizationId: string;
  startTime: number;
  endTime: number;
  totalVibrationExposure: number;
  avgTemperature: number;
  avgNoise: number;
  avgVibration: number;
  avgVelocity: number;
}
