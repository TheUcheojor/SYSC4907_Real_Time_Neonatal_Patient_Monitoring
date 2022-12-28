/**
 * Author: Paul Okenne
 * File: ActiveTripScreen
 * Purpose: Exports the active trip screen, the screen used for recording trips
 */

import { View, Text, StyleSheet } from "react-native";
import TripRecorder, {
  TripRecorderParams,
} from "../../components/TripRecorder";
export default ({
  recordingState,
  setRecordingState,
}: TripRecorderParams): JSX.Element => {
  return (
    <View style={styles.activeTripScreen}>
      <TripRecorder
        recordingState={recordingState}
        setRecordingState={setRecordingState}
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
