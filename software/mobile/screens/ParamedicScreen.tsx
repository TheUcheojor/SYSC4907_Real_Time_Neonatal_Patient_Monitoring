import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { View, Text, Button, ImageSourcePropType } from "react-native";
import {
  MainStackParamList,
  RecordingState,
  SharedScreenResources,
} from "../types";
import { StyleSheet } from "react-native";
import MetricLiveView, {
  NUMBER_OF_VISIBLE_METRIC_POINTS,
} from "../components/MetricLiveView";
import { Image } from "react-native-svg";
import { useEffect, useRef, useState } from "react";
import SensorPackageController from "../controllers/sensor-package/SensorPackage";
import MeasurementPacket from "../controllers/sensor-package/models/MeasurementPacket";
import { circularArrayPush } from "../utils/ArrayUtil";
import {
  generateRandomMeasurementPacket,
  getRandomInt,
} from "../utils/RandomUtil";

import { DatabaseController } from "../controllers/database/DatabaseController";

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

export interface FeedSetterFunctionParams {
  // updateVibrationFeed: React.Dispatch<React.SetStateAction<number[]>>;
  // updateNoiseFeed: React.Dispatch<React.SetStateAction<number[]>>;
  // updateTemperatureFeed: React.Dispatch<React.SetStateAction<number[]>>;
  // updateVelocityFeed: React.Dispatch<React.SetStateAction<number[]>>;

  setMeasurementPacket: React.Dispatch<React.SetStateAction<MeasurementPacket>>;
}

/**
 *
 * The paramedic screen
 */
export default ({ recordingState }: SharedScreenResources): JSX.Element => {
  const databaseController: DatabaseController =
    DatabaseController.getConfiguredDatabaseController();

  const [measurementPacket, setMeasurementPacket] = useState<MeasurementPacket>(
    generateRandomMeasurementPacket()
  );

  const vibrationFeed = useRef<Array<number>>(
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

  // const [vibrationFeed, updateVibrationFeed] = useState<Array<number>>(
  //   new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  // );
  // const [noiseFeed, updateNoiseFeed] = useState<Array<number>>(
  //   new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  // );

  // const [temperatureFeed, updateTemperatureFeed] = useState<Array<number>>(
  //   new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  // );

  // const [velocityFeed, updateVelocityFeed] = useState<Array<number>>(
  //   new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  // );

  const sensorPackageController: SensorPackageController =
    SensorPackageController.getSensorPackageController();

  useEffect(() => {
    console.log("runing mock");
    sensorPackageController.mockMeasurementPacketFeed(
      setMeasurementPacket
      // measurementPackets.current,
      // {
      //   updateVibrationFeed: updateVibrationFeed,
      //   updateNoiseFeed: updateNoiseFeed,
      //   updateTemperatureFeed: updateTemperatureFeed,
      //   updateVelocityFeed: updateVelocityFeed,
      // }
    );
  }, []);

  useEffect(() => {
    vibrationFeed.current = circularArrayPush(
      vibrationFeed.current,
      measurementPacket.vibration
    );
    noiseFeed.current = circularArrayPush(
      vibrationFeed.current,
      measurementPacket.noise
    );
    temperatureFeed.current = circularArrayPush(
      vibrationFeed.current,
      measurementPacket.temperature
    );
    velocityFeed.current = circularArrayPush(
      vibrationFeed.current,
      measurementPacket.velocity
    );
  }, [measurementPacket]);

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

      {/**
       * The elements below are to be removed.
       *
       * Just for demo purposes
       */}
      {/* <View style={{ width: "100%" }}></View>
      <Button
        title="Demo"
        onPress={() => {
          updateVibrationFeed((vibrationFeed) =>
            circularArrayPush(vibrationFeed, getRandomInt(1, 50))
          );
        }}
      /> */}
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
});
