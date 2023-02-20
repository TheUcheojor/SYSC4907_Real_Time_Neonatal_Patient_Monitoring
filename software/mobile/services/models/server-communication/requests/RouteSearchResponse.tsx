/**
 * Author: Paul Okenne
 * File: RouteSearchResponse
 * Purpose: Exports the interface for route search response
 */

import ServerTripRoute from "../ServerTripRoute";
import { BaseServerResponse } from "./BaseServerResponse";

export interface ServerRouteSearchResponse extends BaseServerResponse {
  totalRoutes: number;
  routes: ServerTripRoute[];
}
