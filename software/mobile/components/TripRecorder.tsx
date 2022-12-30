/**
 * Author: Paul Okenne
 * File: Trip Recorder
 * Purpose: Exports the trip recorder component
 */
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect, useRef } from "react";
import {
  convertUnixTimestampToUTCTime,
  getFormatedTimeFromMilliSeconds,
} from "../utils/TimeUtil";
import { RecordingState, SharedScreenResources } from "../types";
import { TripController } from "../controllers/trip-contoller/TripController";
import Route from "../controllers/database/models/Route";
import { RouteSegmentType } from "../controllers/database/models/RouteSegment";
import DropDownPicker from "react-native-dropdown-picker";

/**
 * The rate at which the time is updates
 */
const MILLISECOND_INCREMENT_RATE = 100;

const PATIENT_ID_PLACEHOLDER = "Patient ID";
/**
 * The Trip Recorder Component
 */
export default ({
  recordingState,
  setRecordingState,
}: SharedScreenResources) => {
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

  const startTrip = async (): Promise<void> => {
    const tripController: TripController =
      await TripController.getTripController();

    console.log(patientId.current, segmentType);
    await tripController.startRoute(patientId.current, segmentType);

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

  const addNewRouteSegment = async () => {
    const tripController: TripController =
      await TripController.getTripController();

    console.log(" addNewRouteSegment: ", segmentType);
    tripController.startNewRouteSegment(segmentType);
  };

  // Segement
  const [open, setOpen] = useState<boolean>(false);
  const [segmentType, setSegmentType] = useState<RouteSegmentType>(
    RouteSegmentType.GROUND
  );

  const [routeSegmentTypeOptions, setRouteSegmentTypeOptions] = useState<
    Array<{
      label: string;
      value: RouteSegmentType;
    }>
  >([
    { label: "Ground Transport", value: RouteSegmentType.GROUND },
    { label: "Water Transport", value: RouteSegmentType.WATER },
    { label: "Aerial Transport", value: RouteSegmentType.AERIAL },
  ]);

  const patientId: React.MutableRefObject<string> = useRef<string>("");

  const updatePatientId = (currentPatientId: string) => {
    patientId.current = currentPatientId;
  };

  return (
    <View
      style={{
        ...styles.tripRecorderContainer,
        backgroundColor:
          recordingState == RecordingState.NOT_RECORDING ? "#22A900" : "black",
      }}
    >
      {
        // The recorder component appearance in the NOT-RECORDING state
        recordingState == RecordingState.NOT_RECORDING && (
          <>
            <DropDownPicker
              style={styles.dropdownNotRecording}
              labelStyle={styles.dropdownText}
              open={open}
              value={segmentType}
              items={routeSegmentTypeOptions}
              setOpen={setOpen}
              setValue={setSegmentType}
              setItems={setRouteSegmentTypeOptions}
            />
            <TextInput
              style={styles.textInput}
              placeholder={PATIENT_ID_PLACEHOLDER}
              onChangeText={updatePatientId}
            />
            <Pressable
              onPress={startTrip}
              style={({ pressed }: { pressed: boolean }) => {
                if (!pressed) return styles.startTripContainer;

                return {
                  ...styles.startTripContainer,
                  backgroundColor: "black",
                };
              }}
            >
              <Text style={styles.mainTextGreen}>Start Trip</Text>
            </Pressable>
          </>
        )
      }
      {
        // The recorder component appearance when it is NOT in the RECORDING state
        recordingState !== RecordingState.NOT_RECORDING && (
          <>
            <View style={styles.recordingContainer}>
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
            </View>

            <View style={styles.addSegmentContainer}>
              <DropDownPicker
                containerStyle={styles.dropdownRecording}
                labelStyle={styles.dropdownText}
                open={open}
                value={segmentType}
                items={routeSegmentTypeOptions}
                setOpen={setOpen}
                setValue={setSegmentType}
                setItems={setRouteSegmentTypeOptions}
              />

              <Pressable
                style={({ pressed }: { pressed: boolean }) => {
                  if (!pressed) return styles.addNewSegmentButton;

                  return {
                    ...styles.addNewSegmentButton,
                    backgroundColor: "black",
                  };
                }}
                onPress={addNewRouteSegment}
              >
                <Text style={styles.mainTextGreen}>ADD NEW TRIP SEGMENT</Text>
              </Pressable>
            </View>
          </>
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
  },

  mainText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    color: "white",
    alignSelf: "center",
  },

  mainTextGreen: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    alignSelf: "center",
    color: "#22A900",
    textAlign: "center",
    textTransform: "uppercase",
  },

  startTripContainer: {
    backgroundColor: "#2F2F2F",
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopWidth: 15,
    borderBottomColor: "black",
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

  dropdownNotRecording: {
    padding: 20,
    borderWidth: 0,
    alignSelf: "center",
    width: "90%",
    marginTop: 15,
  },

  dropdownText: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
  },

  textInput: {
    margin: 10,
    padding: 10,
    width: "90%",
    fontFamily: "Montserrat_700Bold",
    backgroundColor: "white",
    fontSize: 12,
    borderRadius: 10,
  },

  recordingContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 15,
  },

  addSegmentContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownRecording: {
    padding: 10,
    borderWidth: 0,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },

  addNewSegmentButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#2F2F2F",
  },
});
