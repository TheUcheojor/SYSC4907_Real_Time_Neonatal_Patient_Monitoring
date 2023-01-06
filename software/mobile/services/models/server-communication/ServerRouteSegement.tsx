/**
 * Author: Paul Okenne
 * File: ServerRouteSegment
 * Purpose: Exports the schema for a server route segment object
 */

import RouteLocation from "../common/Location";
import RouteSegment from "../trips/RouteSegment";

export default interface ServerRouteSegment extends RouteSegment {
  startLocation: RouteLocation;
  endLocation: RouteLocation;
}
