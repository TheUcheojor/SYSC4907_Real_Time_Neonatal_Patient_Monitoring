/**
 * Author: Paul Okenne
 * File: RouteSearchResponse
 * Purpose: Exports the interface for route search response
 */

import ServerTripRoute from "../ServerTripRoute";
import { BaseServerResponse } from "./BaseServerResponse";

export interface ServerRouteSearchResponse {
  totalRoutes: number;
  routes: ServerTripRoute[];
}
