import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { getFormatedTimeFromMilliSeconds } from "../../../utils/TimeUtil";
import { RouteRecordingState } from "../../../types";
import DropDownPicker from "react-native-dropdown-picker";
import { TripRecorderSubcomponentParams } from "../models/NonRecordingTripRecorderParams";
import { getPressedHighlightBehaviourStyle } from "../../../utils/ComponentsUtil";
import { APP_WIDTH } from "../../../constants/ViewConstants";

export default ({
  segmentType,
  setSegmentType,
  dropDownOpen,
  setdropDownOpen,
  routeSegmentTypeOptions,
  setRouteSegmentTypeOptions,
  time,
  recordingState,
  togglePauseResumeTrip,
  stopTrip,
  addNewRouteSegment,
}: TripRecorderSubcomponentParams) => {
  const onPressedButtonBackgroundColour: string = "black";

  return (
    <>
      <View style={styles.recordingContainer}>
        <View style={styles.currentTripStatusContainer}>
          <Text style={styles.mainText}>Current Trip</Text>
          {recordingState == RouteRecordingState.RECORDING && (
            <Text style={{ ...styles.minorText, color: "#22A900" }}>
              Recording
            </Text>
          )}
          {recordingState == RouteRecordingState.PAUSED && (
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
            {recordingState == RouteRecordingState.RECORDING && (
              <FontAwesome name="pause" size={24} color="white" />
            )}
            {recordingState == RouteRecordingState.PAUSED && (
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
          open={dropDownOpen}
          value={segmentType}
          items={routeSegmentTypeOptions}
          setOpen={setdropDownOpen}
          setValue={setSegmentType}
          setItems={setRouteSegmentTypeOptions}
        />

        <Pressable
          style={({ pressed }: { pressed: boolean }) =>
            getPressedHighlightBehaviourStyle(
              pressed,
              styles.addNewSegmentButton,
              onPressedButtonBackgroundColour
            )
          }
          onPress={addNewRouteSegment}
        >
          <Text style={styles.mainTextGreen}>ADD NEW TRIP SEGMENT</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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

  dropdownText: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
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
    padding: APP_WIDTH < 400 ? 5 : 15,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#2F2F2F",
  },
});
