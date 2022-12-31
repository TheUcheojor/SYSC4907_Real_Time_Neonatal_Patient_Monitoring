/**
 * Author: Paul Okenne
 * File: Route
 * Purpose: Exports the route segement schema model
 */

export enum RouteSegmentType {
  GROUND = "Ground Tranport",
  AERIAL = "Aerial Tranport",
  WATER = "Water Tranport",
}
export default interface RouteSegment {
  /**
   * The route segement id
   */
  segmentId: number;

  /**
   * The segmenet type
   */
  segmentType: RouteSegmentType;

  /**
   * The route id
   */
  routeId: number;

  /**
   * The start time for route
   */
  startTime: string;

  /**
   * The end time for route
   */
  endTime: string;
}
