import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, ImageSourcePropType } from "react-native";
import { MainStackParamList } from "../types";
import { StyleSheet } from "react-native";
import MetricLiveView, {
  MetricLiveViewParameters,
  NUMBER_OF_VISIBLE_METRIC_POINTS,
} from "../components/MetricLiveView";
import { Image } from "react-native-svg";
import { useState } from "react";

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

/**
 * The paramedic screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Paramedic">): JSX.Element => {
  const [vibrationFeed, updateVibrationFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

  const [noiseFeed, updateNoiseFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

  const [temperatureFeed, updateTemperatureFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

  const [velocityFeed, updateVelocityFeed] = useState<Array<number>>(
    new Array<number>(NUMBER_OF_VISIBLE_METRIC_POINTS).fill(0)
  );

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

      {/**
       * The elements below are to be removed.
       *
       * Just for demo purposes
       */}
      <View style={{ width: "100%" }}></View>
      <Button
        title="Demo"
        onPress={() => {
          updateVibrationFeed([
            ...vibrationFeed.slice(1, vibrationFeed.length),
            getRandomInt(1, 50),
          ]);

          console.log(vibrationFeed);
        }}
      />
    </View>
  );
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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
