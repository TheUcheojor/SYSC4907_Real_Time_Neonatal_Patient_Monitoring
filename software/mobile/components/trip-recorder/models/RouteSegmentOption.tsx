/**
 * Author: Paul Okenne
 * File : RouteSegmentDropdownOption
 * Purpose: Exports the interface for drop down items
 */

import { RouteSegmentType } from "../../../controllers/database/models/RouteSegment";

export interface RouteSegmentDropdownOption {
  label: string;
  value: RouteSegmentType;
}
