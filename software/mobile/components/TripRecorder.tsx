/**
 * Author: Paul Okenne
 * File: Trip Recorder
 * Purpose: Exports the trip recorder component
 */
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { getFormatedTimeFromMilliSeconds } from "../utils/TimeUtil";
import { RecordingState, SharedScreenResources } from "../types";

/**
 * The rate at which the time is updates
 */
const MILLISECOND_INCREMENT_RATE = 100;

/**
 * The Trip Recorder Component
 */
export default ({
  recordingState,
  setRecordingState,
}: SharedScreenResources) => {
  //   RecordingStateStatus.recordingState = recordingState;
  //   const [recordingState, setRecordingState] = useState<RecordingState>(
  //     RecordingState.NOT_RECORDING
  //   );

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let timerInterval!: NodeJS.Timer;
    switch (recordingState) {
      case RecordingState.NOT_RECORDING:
        clearInterval(timerInterval);
        setTime(0);
        break;
      case RecordingState.RECORDING:
        timerInterval = setInterval(() => {
          setTime((time) => time + MILLISECOND_INCREMENT_RATE);
        }, MILLISECOND_INCREMENT_RATE);
        break;
      case RecordingState.PAUSED:
        clearInterval(timerInterval);
        break;
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [recordingState]);

  const startTrip = (): void => {
    setRecordingState(RecordingState.RECORDING);
  };

  const stopTrip = (): void => {
    setRecordingState(RecordingState.NOT_RECORDING);
  };

  const togglePauseResumeTrip = (): void => {
    setRecordingState(
      recordingState == RecordingState.RECORDING
        ? RecordingState.PAUSED
        : RecordingState.RECORDING
    );
  };

  const recorderBackgroundColor =
    recordingState == RecordingState.NOT_RECORDING ? "#22A900" : "black";

  return (
    <Pressable
      style={{
        ...styles.tripRecorderContainer,
        backgroundColor: recorderBackgroundColor,
      }}
      onPress={startTrip}
    >
      {
        // The recorder component appearance in the NOT-RECORDING state
        recordingState == RecordingState.NOT_RECORDING && (
          <>
            <FontAwesome
              name="play-circle"
              size={40}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.mainText}>Start Trip</Text>
          </>
        )
      }
      {
        // The recorder component appearance when it is NOT in the RECORDING state
        recordingState !== RecordingState.NOT_RECORDING && (
          <>
            <View style={styles.currentTripStatusContainer}>
              <Text style={styles.mainText}>Current Trip</Text>
              {recordingState == RecordingState.RECORDING && (
                <Text style={{ ...styles.minorText, color: "#22A900" }}>
                  Recording
                </Text>
              )}
              {recordingState == RecordingState.PAUSED && (
                <Text style={{ ...styles.minorText, color: "#D9D9D9" }}>
                  Paused
                </Text>
              )}
            </View>
            <View style={styles.timerControlContainer}>
              <Text style={styles.mainText}>
                {getFormatedTimeFromMilliSeconds(time)}
              </Text>

              <Pressable onPress={togglePauseResumeTrip}>
                {recordingState == RecordingState.RECORDING && (
                  <FontAwesome name="pause" size={24} color="white" />
                )}
                {recordingState == RecordingState.PAUSED && (
                  <FontAwesome5 name="play" size={24} color="white" />
                )}
              </Pressable>

              <Pressable onPress={stopTrip}>
                <FontAwesome name="stop-circle-o" size={35} color="red" />
              </Pressable>
            </View>
          </>
        )
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tripRecorderContainer: {
    flexDirection: "row",
    width: "95%",
    height: 60,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 20,
    borderRadius: 20,
    padding: 10,
  },

  mainText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    color: "white",
  },

  minorText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
  },

  currentTripStatusContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  timerControlContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
