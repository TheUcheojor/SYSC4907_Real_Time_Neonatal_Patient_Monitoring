/**
 * Author: Paul Okenne
 * File: Route
 * Purpose: Exports the route database schema model
 */

export default interface Route {
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
