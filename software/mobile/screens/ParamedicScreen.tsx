import {
  View,
  ImageSourcePropType,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { RecordingState, SharedScreenResources } from "../types";
import { StyleSheet } from "react-native";
import MetricLiveView, {
  NUMBER_OF_VISIBLE_METRIC_POINTS,
} from "../components/MetricLiveView";
import { useCallback, useEffect, useRef, useState } from "react";
import SensorPackageController from "../controllers/sensor-package/SensorPackage";
import { circularArrayPush } from "../utils/ArrayUtil";

import { DatabaseController } from "../controllers/database/DatabaseController";
import { Subscription } from "react-native-ble-plx";
import { TripController } from "../controllers/trip-contoller/TripController";

/**
 * View Constants
 */
const VIBRATION_METRIC_TITLE: string = "Vibration";
const VIBRATION_GRAPH_COLOUR: string = "#0E9CFF";
const VIBRATION_ICON_SOURCE: ImageSourcePropType = require("../assets/images/shake.png");
const VIBRATION_UNITS: string = "Hz";

const NOISE_METRIC_TITLE: string = "Noise";
const NOISE_GRAPH_COLOUR: string = "#59D9F5";
const NOISE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/noise.png");
const NOISE_UNITS: string = "dB";

const TEMPERATURE_METRIC_TITLE: string = "Temperature";
const TEMPERATURE_GRAPH_COLOUR: string = "#9B9E0A";
const TEMPERATURE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/temperature.png");
const TEMPERATURE_UNITS: string = "C";

const VELOCITY_METRIC_TITLE: string = "Velocity";
const VELOCITY_GRAPH_COLOUR: string = "#AA85E5";
const VELOCITY_ICON_SOURCE: ImageSourcePropType = require("../assets/images/ambulance.png");
const VELOCITY_UNITS: string = "dB";

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
  const vibrationFeed: React.MutableRefObject<number[]> = useRef<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );
  const noiseFeed = useRef<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

  const temperatureFeed = useRef<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );
  const velocityFeed = useRef<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

  const sensorPackageController: SensorPackageController =
    SensorPackageController.getSensorPackageController();

  /**
   * Update the feed from the sensor package
   */
  useEffect(() => {
    const packetFeedSubscription: Subscription | null =
      sensorPackageController.getMeasurementPacketFeed(setMeasurementPacket);

    return () => {
      if (packetFeedSubscription !== null) packetFeedSubscription.remove();
    };
  }, []);

  /**
   * Mocking a feed from the sensor package from the send
   */
  useEffect(() => {
    const generateMeasurementPacketInterval: NodeJS.Timer =
      sensorPackageController.mockMeasurementPacketFeed(setMeasurementPacket);

    return () => clearInterval(generateMeasurementPacketInterval);
  }, []);

  /**
   * Update the feeds as when measurement-packet changes
   */
  useEffect(() => {
    vibrationFeed.current = circularArrayPush(
      vibrationFeed.current,
      measurementPacket.vibration
    );
    noiseFeed.current = circularArrayPush(
      noiseFeed.current,
      measurementPacket.noise
    );
    temperatureFeed.current = circularArrayPush(
      temperatureFeed.current,
      measurementPacket.temperature
    );
    velocityFeed.current = circularArrayPush(
      velocityFeed.current,
      measurementPacket.velocity
    );
  }, [measurementPacket]);

  const [annotationInput, setAnnotationInput] = useState<string>("");

  /**
   * Save the measurement packets if trips are being recorded
   */
  const saveMeasurementPackets = (
    measurementPacketAnnotation: string
  ): Promise<void> => {
    if (recordingState == RecordingState.RECORDING) {
      return TripController.getTripController().then(
        (tripController: TripController) => {
          console.log("annotationInput: ", measurementPacketAnnotation);

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

  return (
    <View style={styles.screenContainer}>
      <MetricLiveView
        metricTitle={VIBRATION_METRIC_TITLE}
        graphColor={VIBRATION_GRAPH_COLOUR}
        iconImageSource={VIBRATION_ICON_SOURCE}
        unitsLabel={VIBRATION_UNITS}
        liveData={vibrationFeed.current}
      />

      <MetricLiveView
        metricTitle={NOISE_METRIC_TITLE}
        graphColor={NOISE_GRAPH_COLOUR}
        iconImageSource={NOISE_ICON_SOURCE}
        unitsLabel={NOISE_UNITS}
        liveData={noiseFeed.current}
      />

      <MetricLiveView
        metricTitle={TEMPERATURE_METRIC_TITLE}
        graphColor={TEMPERATURE_GRAPH_COLOUR}
        iconImageSource={TEMPERATURE_ICON_SOURCE}
        unitsLabel={TEMPERATURE_UNITS}
        liveData={temperatureFeed.current}
      />

      <MetricLiveView
        metricTitle={VELOCITY_METRIC_TITLE}
        graphColor={VELOCITY_GRAPH_COLOUR}
        iconImageSource={VELOCITY_ICON_SOURCE}
        unitsLabel={VELOCITY_UNITS}
        liveData={velocityFeed.current}
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
    alignContent: "center",
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
