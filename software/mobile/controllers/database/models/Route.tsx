/**
 * Author: Paul Okenne
 * File: Route
 * Purpose: Exports the route database schema model
 */

export default interface Route {
  /**
   * The route id
   */
  routeId: number | undefined;
  /**
   * The patiend id
   */
  patientId: string | undefined;

  /**
   * The start time
   */
  startTime: string | undefined;

  /**
   * The end time
   */
  endTime: string | undefined;
}
