/**
 * Author: Paul Okenne
 * File: ActiveTripScreen
 * Purpose: Exports the active trip screen, the screen used for recording trips
 */

import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LocalTrips from "../../components/LocalTrips";
import TripRecorder from "../../components/trip-recorder/TripRecorder";
import { SharedScreenResources } from "../../types";
export default ({
  recordingState,
  setRecordingState,
  measurementPacket,
  setMeasurementPacket,
}: SharedScreenResources): JSX.Element => {
  const [numberOfUnfetchedTrip, setNumberOfUnfetchedTrip] = useState<number>(0);

  return (
    <View style={styles.activeTripScreen}>
      <TripRecorder
        recordingState={recordingState}
        setRecordingState={setRecordingState}
        measurementPacket={measurementPacket}
        setMeasurementPacket={setMeasurementPacket}
        setNumberOfUnfetchedTrip={setNumberOfUnfetchedTrip}
      />

      <LocalTrips
        numberOfUnfetchedTrip={numberOfUnfetchedTrip}
        setNumberOfUnfetchedTrip={setNumberOfUnfetchedTrip}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activeTripScreen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
});
