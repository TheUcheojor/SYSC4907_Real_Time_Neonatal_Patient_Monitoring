/**
 * Author: Paul Okenne
 * File: TripRoute
 * Purpose: Exports the route database schema model
 */

import ServerTripRoute from "../server-communication/ServerTripRoute";

export default interface TripRoute {
  /**
   * The route id
   */
  routeId: number;
  /**
   * The patiend id
   */
  patientId: string;

  /**
   * The start time
   */
  startTime: string;

  /**
   * The end time
   */
  endTime: string;
}

export const isMobileTripRoute = (
  obj: ServerTripRoute | TripRoute
): obj is TripRoute => {
  return "patientId" in obj;
};
