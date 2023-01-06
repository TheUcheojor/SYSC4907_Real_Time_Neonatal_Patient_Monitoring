/**
 * Author: Paul Okenne
 * File: Trip Recorder
 * Purpose: Exports the trip recorder component
 */
import { View, StyleSheet } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { RouteRecordingState, SharedScreenResources } from "../../types";
import { TripRecordingService } from "../../services/TripRecordingService";
import { RouteSegmentType } from "../../services/models/trips/RouteSegment";
import NonRecordingTripRecorder from "./subcomponents/NonRecordingTripRecorder";
import { RouteSegmentDropdownOption } from "./models/RouteSegmentOption";
import RecordingTripRecorder from "./subcomponents/RecordingTripRecorder";

/**
 * The rate at which the time is updated
 */
const MILLISECOND_INCREMENT_RATE = 100;

/**
 * The Trip Recorder Component
 */
export default ({
  recordingState,
  setRecordingState,
}: SharedScreenResources) => {
  const [time, setTime] = useState<number>(0);
  const [dropDropdownOpen, setdropDownOpen] = useState<boolean>(false);
  const [segmentType, setSegmentType] = useState<RouteSegmentType>(
    RouteSegmentType.GROUND
  );
  const patientId: React.MutableRefObject<string> = useRef<string>("");

  const [routeSegmentTypeOptions, setRouteSegmentTypeOptions] = useState<
    Array<RouteSegmentDropdownOption>
  >([
    { label: RouteSegmentType.GROUND, value: RouteSegmentType.GROUND },
    { label: RouteSegmentType.WATER, value: RouteSegmentType.WATER },
    { label: RouteSegmentType.AERIAL, value: RouteSegmentType.AERIAL },
  ]);

  /**
   * Configure the timer when recording
   */
  useEffect(() => {
    let timerInterval!: NodeJS.Timer;
    switch (recordingState) {
      case RouteRecordingState.NOT_RECORDING:
        clearInterval(timerInterval);
        setTime(0);
        break;
      case RouteRecordingState.RECORDING:
        timerInterval = setInterval(() => {
          setTime((time) => time + MILLISECOND_INCREMENT_RATE);
        }, MILLISECOND_INCREMENT_RATE);
        break;
      case RouteRecordingState.PAUSED:
        clearInterval(timerInterval);
        break;
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [recordingState]);

  /**
   * Stop the current trip
   */
  const stopTrip = (): void => {
    TripRecordingService.getTripController().then(
      (tripController: TripRecordingService) => {
        tripController.endRoute().then(() => {
          setRecordingState(RouteRecordingState.NOT_RECORDING);
        });
      }
    );
  };

  /**
   * Pause or resume a trip
   */
  const togglePauseResumeTrip = (): void => {
    setRecordingState(
      recordingState == RouteRecordingState.RECORDING
        ? RouteRecordingState.PAUSED
        : RouteRecordingState.RECORDING
    );
  };

  /**
   * Add a new route segment to the current trip
   */
  const addNewRouteSegment = (): void => {
    TripRecordingService.getTripController().then(
      (tripController: TripRecordingService) => {
        tripController.startNewRouteSegment(segmentType);
        console.log(" addNewRouteSegment: ", segmentType);
      }
    );
  };

  /**
   * Update the currentPatientId reference with the most recent value
   * @param currentPatientId
   */
  const updatePatientId = (currentPatientId: string) => {
    patientId.current = currentPatientId;
    console.log("updatePatientId: ", patientId.current);
  };

  /**
   * Start a trip, recording incoming measurement packets
   */
  const startTrip = (): void => {
    TripRecordingService.getTripController().then(
      (tripController: TripRecordingService) => {
        console.log("startTrip: ", patientId.current);
        tripController.startRoute(patientId.current, segmentType).then(() => {
          patientId.current = "";
          setRecordingState(RouteRecordingState.RECORDING);
        });
      }
    );
  };

  return (
    <View
      style={{
        ...styles.tripRecorderContainer,
        backgroundColor:
          recordingState == RouteRecordingState.NOT_RECORDING
            ? "#22A900"
            : "black",
      }}
    >
      {
        // The recorder component appearance in the NOT-RECORDING state
        recordingState == RouteRecordingState.NOT_RECORDING && (
          <NonRecordingTripRecorder
            segmentType={segmentType}
            setSegmentType={setSegmentType}
            dropDownOpen={dropDropdownOpen}
            setdropDownOpen={setdropDownOpen}
            routeSegmentTypeOptions={routeSegmentTypeOptions}
            setRouteSegmentTypeOptions={setRouteSegmentTypeOptions}
            startTrip={startTrip}
            updatePatientId={updatePatientId}
            time={time}
            recordingState={recordingState}
            togglePauseResumeTrip={togglePauseResumeTrip}
            stopTrip={stopTrip}
            addNewRouteSegment={addNewRouteSegment}
          />
        )
      }
      {
        // The recorder component appearance when it is NOT in the RECORDING state
        recordingState !== RouteRecordingState.NOT_RECORDING && (
          <RecordingTripRecorder
            segmentType={segmentType}
            setSegmentType={setSegmentType}
            dropDownOpen={dropDropdownOpen}
            setdropDownOpen={setdropDownOpen}
            routeSegmentTypeOptions={routeSegmentTypeOptions}
            setRouteSegmentTypeOptions={setRouteSegmentTypeOptions}
            startTrip={startTrip}
            updatePatientId={updatePatientId}
            time={time}
            recordingState={recordingState}
            togglePauseResumeTrip={togglePauseResumeTrip}
            stopTrip={stopTrip}
            addNewRouteSegment={addNewRouteSegment}
          />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  tripRecorderContainer: {
    flexDirection: "column",
    width: "95%",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 20,
    borderRadius: 20,
    flexWrap: "wrap",
    zIndex: 2,
  },
});
