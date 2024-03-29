/**
 * Author: Paul Okenne
 * File: NonRecordingTripRecorder
 * Purpose: Exports the visuals of the Trip Recorder when not recording
 */

import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";

import DropDownPicker from "react-native-dropdown-picker";
import { getPressedHighlightBehaviourStyle } from "../../../utils/ComponentsUtil";
import { TripRecorderSubcomponentParams } from "../models/NonRecordingTripRecorderParams";

const PATIENT_ID_PLACEHOLDER = "Patient ID";

export default ({
  segmentType,
  setSegmentType,
  dropDownOpen,
  setdropDownOpen,
  routeSegmentTypeOptions,
  setRouteSegmentTypeOptions,
  startTrip,
  updatePatientId,
}: TripRecorderSubcomponentParams): JSX.Element => {
  const onPressedButtonBackgroundColour: string = "black";
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.inputSubtitle}> Transport Type </Text>

        <DropDownPicker
          style={styles.dropdownNotRecording}
          labelStyle={styles.dropdownText}
          open={dropDownOpen}
          value={segmentType}
          items={routeSegmentTypeOptions}
          setOpen={setdropDownOpen}
          setValue={setSegmentType}
          setItems={setRouteSegmentTypeOptions}
        />

        <Text style={styles.inputSubtitle}> Patient Id </Text>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder={PATIENT_ID_PLACEHOLDER}
        onChangeText={updatePatientId}
      />

      <Pressable
        onPress={startTrip}
        style={({ pressed }: { pressed: boolean }) =>
          getPressedHighlightBehaviourStyle(
            pressed,
            styles.startTripContainer,
            onPressedButtonBackgroundColour
          )
        }
      >
        <Text style={styles.mainTextGreen}>Start Trip</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  mainTextGreen: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    alignSelf: "center",
    color: "#22A900",
    textAlign: "center",
    textTransform: "uppercase",
  },

  inputSubtitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    marginVertical: 5,
    color: "white",
    textTransform: "uppercase",
    // textAlign: "left",
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

  inputContainer: {
    marginTop: 10,
    marginBottom: 0,
    // width: "100%",
  },
  dropdownNotRecording: {
    padding: 20,
    borderWidth: 0,
    alignSelf: "center",
    width: "90%",
    marginBottom: 10,
  },

  dropdownText: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
  },

  textInput: {
    marginBottom: 10,
    padding: 10,
    width: "90%",
    fontFamily: "Montserrat_700Bold",
    backgroundColor: "white",
    fontSize: 12,
    borderRadius: 10,
  },
});
