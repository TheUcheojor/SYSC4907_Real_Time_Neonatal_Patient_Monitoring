/**
 * Author: Paul Okenne
 * File: ActiveTripScreen
 * Purpose: Exports the active trip screen, the screen used for recording trips
 */

import { View, Text, StyleSheet } from "react-native";
import TripRecorder from "../../components/TripRecorder";
import { SharedScreenResources } from "../../types";
export default ({
  recordingState,
  setRecordingState,
  measurementPacket,
  setMeasurementPacket,
}: SharedScreenResources): JSX.Element => {
  return (
    <View style={styles.activeTripScreen}>
      <TripRecorder
        recordingState={recordingState}
        setRecordingState={setRecordingState}
        measurementPacket={measurementPacket}
        setMeasurementPacket={setMeasurementPacket}
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
