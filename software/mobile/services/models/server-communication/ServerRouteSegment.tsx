/**
 * Author: Ryan Fife & Paul Okenen
 * File: ServerRouteSegment
 * Purpose: Exports the schema for the server route segment
 */

export interface ServerRouteSegment {
  segment_id: number;
  route_id: number;
  start_time_s: number;
  end_time_s: number;
  segment_type: ServerRouteSegmentType;
}

/**
 * The server's segement type
 */
export enum ServerRouteSegmentType {
  AERIAL = "aerial",
  ROAD = "road",
  BOAT = "boat",
}
