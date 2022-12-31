/**
 * Author: Paul Okenne
 * File : TripRecorderSubcomponentParams
 * Purpose: Exports the format for trip recorder subscomponent parameters
 */
import { RouteSegmentType } from "../../../controllers/database/models/RouteSegment";
import { RouteRecordingState } from "../../../types";
import { RouteSegmentDropdownOption } from "./RouteSegmentOption";

export interface TripRecorderSubcomponentParams {
  segmentType: RouteSegmentType;
  setSegmentType: React.Dispatch<React.SetStateAction<RouteSegmentType>>;

  dropDownOpen: boolean;
  setdropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;

  routeSegmentTypeOptions: Array<RouteSegmentDropdownOption>;
  setRouteSegmentTypeOptions: React.Dispatch<
    React.SetStateAction<Array<RouteSegmentDropdownOption>>
  >;

  startTrip: () => void;

  updatePatientId: (currentPatientId: string) => void;

  time: number;

  recordingState: RouteRecordingState;

  togglePauseResumeTrip: () => void;

  stopTrip: () => void;

  addNewRouteSegment: () => void;
}
