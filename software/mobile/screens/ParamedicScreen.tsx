/**
 * File: ParamedicScreen
 * Author: Paul Okenne
 * Purpose: Returns the paramedic screen component
 */
import { View, TextInput, Pressable, Text } from "react-native";
import { RouteRecordingState, SharedScreenResources } from "../types";
import { StyleSheet } from "react-native";
import MetricLiveView, {
  NUMBER_OF_VISIBLE_METRIC_POINTS,
} from "../components/MetricLiveView";
import { useEffect, useRef, useState } from "react";
import SensorPackageController from "../services/SensorPackageController";
import { circularArrayPush } from "../utils/ArrayUtil";

import { TripRecordingService } from "../services/TripRecordingService";
import {
  VIBRATION_METRIC_TITLE,
  VIBRATION_GRAPH_COLOUR,
  VIBRATION_ICON_SOURCE,
  NOISE_METRIC_TITLE,
  NOISE_GRAPH_COLOUR,
  NOISE_ICON_SOURCE,
  NOISE_UNITS,
  TEMPERATURE_METRIC_TITLE,
  TEMPERATURE_GRAPH_COLOUR,
  TEMPERATURE_ICON_SOURCE,
  TEMPERATURE_UNITS,
  VELOCITY_METRIC_TITLE,
  VELOCITY_GRAPH_COLOUR,
  VELOCITY_ICON_SOURCE,
  VELOCITY_UNITS,
  VIBRATION_UNITS,
} from "../constants/metric-constants";
import { SYSTEM_CONFIGURATION } from "../global/SystemConfiguration";
import LoggerService from "../services/LoggerService";

/**
 * View Constants
 */
const ANNOATION_TEXT_INPUT_PLACEHOLDER: string = "Enter your comments";

/**
 *
 * The paramedic screen
 */
export default ({
  recordingState,
  measurementPacket,
  setMeasurementPacket,
}: SharedScreenResources): JSX.Element => {
  const [vibrationFeed, setVibrationFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );
  const [noiseFeed, setNoiseFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );
  const [temperatureFeed, setTemperatureFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );
  const [velocityFeed, setVelocityFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

  /**
   * Update the feeds as when measurement-packet changes
   */
  useEffect(() => {
    setVibrationFeed(
      circularArrayPush(vibrationFeed, measurementPacket.vibration)
    );

    setNoiseFeed(circularArrayPush(noiseFeed, measurementPacket.noise));

    setTemperatureFeed(
      circularArrayPush(temperatureFeed, measurementPacket.temperature)
    );

    setVelocityFeed(circularArrayPush(velocityFeed, measurementPacket.speed));
  }, [measurementPacket]);

  const [annotationInput, setAnnotationInput] = useState<string>("");

  /**
   * Save the measurement packets if trips are being recorded
   */
  const saveMeasurementPackets = (
    measurementPacketAnnotation: string
  ): Promise<void> => {
    if (recordingState == RouteRecordingState.RECORDING) {
      return TripRecordingService.getTripController().then(
        (tripController: TripRecordingService) => {
          LoggerService.debug(
            "Saving the measurement packet: ",
            measurementPacket
          );

          return tripController.saveMeasurementPacket(
            measurementPacket,
            measurementPacketAnnotation
          );
        }
      );
    }

    return new Promise(() => {
      return;
    });
  };

  /**
   * Save measurement packets if trips are being recorded
   */
  useEffect(() => {
    saveMeasurementPackets("");
  }, [recordingState, measurementPacket]);

  /**
   * Save the current measurement packet along with the given annotation
   */
  const addAnnotation = () => {
    saveMeasurementPackets(annotationInput).then(() => {
      setAnnotationInput("");
    });
  };

  // /**
  //  * Mocking a feed from the sensor package
  //  *
  //  * Start a demo live datafeed if the flag is set.
  //  * This allows developers to simulate the sensor package
  //  */
  // useEffect(() => {
  //   let generateMeasurementPacketInterval: NodeJS.Timer;

  //   if (SYSTEM_CONFIGURATION.TRIGGER_DEMO_LIVE_DATAFEED_ON_LOGIN) {
  //     const sensorPackageController: SensorPackageController =
  //       SensorPackageController.getSensorPackageController();

  //     generateMeasurementPacketInterval =
  //       sensorPackageController.mockMeasurementPacketFeed(setMeasurementPacket);
  //   }

  //   return () => clearInterval(generateMeasurementPacketInterval);
  // }, []);

  return (
    <View style={styles.screenContainer}>
      <MetricLiveView
        metricTitle={VIBRATION_METRIC_TITLE}
        graphColor={VIBRATION_GRAPH_COLOUR}
        iconImageSource={VIBRATION_ICON_SOURCE}
        unitsLabel={VIBRATION_UNITS}
        liveData={vibrationFeed}
      />

      <MetricLiveView
        metricTitle={NOISE_METRIC_TITLE}
        graphColor={NOISE_GRAPH_COLOUR}
        iconImageSource={NOISE_ICON_SOURCE}
        unitsLabel={NOISE_UNITS}
        liveData={noiseFeed}
      />

      <MetricLiveView
        metricTitle={TEMPERATURE_METRIC_TITLE}
        graphColor={TEMPERATURE_GRAPH_COLOUR}
        iconImageSource={TEMPERATURE_ICON_SOURCE}
        unitsLabel={TEMPERATURE_UNITS}
        liveData={temperatureFeed}
      />

      <MetricLiveView
        metricTitle={VELOCITY_METRIC_TITLE}
        graphColor={VELOCITY_GRAPH_COLOUR}
        iconImageSource={VELOCITY_ICON_SOURCE}
        unitsLabel={VELOCITY_UNITS}
        liveData={velocityFeed}
      />

      <View style={styles.annotationContainer}>
        <TextInput
          style={styles.annotationTextInput}
          onChangeText={setAnnotationInput}
          value={annotationInput}
          placeholder={ANNOATION_TEXT_INPUT_PLACEHOLDER}
        />

        <Pressable
          onPress={addAnnotation}
          style={({ pressed }: { pressed: boolean }) => {
            if (!pressed) return styles.addAnnotationButton;

            return {
              ...styles.addAnnotationButton,
              backgroundColor: "black",
            };
          }}
        >
          <Text style={styles.addAnnotationButtonText}>Add Annotation</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "white",
  },

  icon: {
    width: 50,
    height: 50,
    tintColor: "white",
  },

  annotationContainer: {
    marginTop: 15,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
  },

  annotationTextInput: {
    flex: 2,
    backgroundColor: "#D9D9D9",
    padding: 15,
    borderRadius: 10,
  },

  addAnnotationButton: {
    flex: 1,
    margin: 5,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#2F2F2F",
    borderRadius: 10,
  },
  addAnnotationButtonText: {
    fontFamily: "Montserrat_600SemiBold",
    textTransform: "capitalize",
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});
