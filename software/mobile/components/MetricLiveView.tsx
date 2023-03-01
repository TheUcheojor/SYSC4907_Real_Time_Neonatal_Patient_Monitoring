/**
 * Author: Paul Okenne
 * File: MetricLiveView
 * Purpose: Exports a component that displays metrics in real time and exports supporting interfaces/constants
 */
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  Dimensions,
} from "react-native";

import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
  VictoryGroup,
} from "victory-native";
import { APP_HEIGHT, APP_WIDTH } from "../constants/ViewConstants";

/**
 * The metric live view parameter
 */
export interface MetricLiveViewParameters {
  /**
   * The graph color
   */
  readonly graphColor: string;

  /**
   * The measured metric
   */
  readonly metricTitle: string;

  /**
   * The metric icon
   */
  readonly iconImageSource: ImageSourcePropType;

  /**
   * The units used to measured
   */
  readonly unitsLabel: string;

  /**
   * The live data feed
   */
  readonly liveData: Array<number>;
}

/**
 * The number of points on the graph at any time
 */
export const NUMBER_OF_VISIBLE_METRIC_POINTS = 20;
const LIVE_DATA_PRECISION = 0;

type window = {
  width: number;
  height: number;
};

/**
 * The MetricLiveView Component
 */
export default function MetricLiveView({
  graphColor,
  metricTitle,
  iconImageSource,
  unitsLabel,
  liveData,
}: MetricLiveViewParameters) {
  const [containerWindow, setContainerWidow] = useState<window>(
    Dimensions.get("window")
  );

  let containerWidth = containerWindow.width / 2.5;
  let containerHeight = (0.95 * containerWindow.height) / 4;
  let graphWidth = containerWindow.width / 2.5 + 90;
  let graphHeight = containerHeight - 40;

  const updateStyles = () => {
    setContainerWidow(Dimensions.get("window"));
  };
  return (
    <View
      style={{
        ...styles.container,
        width: containerWidth,
        height: containerHeight,
      }}
      onLayout={updateStyles}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={iconImageSource} />
      </View>
      <Text style={styles.title}>{metricTitle}</Text>
      <Text style={styles.text}>
        {" "}
        {liveData[liveData.length - 1].toFixed(LIVE_DATA_PRECISION)}{" "}
        {unitsLabel}
      </Text>

      <View style={{ ...styles.graphContainer, width: containerWidth }}>
        <VictoryGroup width={graphWidth} height={graphHeight}>
          <VictoryArea
            interpolation="monotoneX"
            style={{
              data: {
                stroke: graphColor,
                fill: graphColor,
                fillOpacity: 0.2,
                strokeWidth: 2,
              },
            }}
            data={liveData}
          />

          {/* <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fill: "transparent" },
              grid: { stroke: "transparent" },
            }}
          /> */}
        </VictoryGroup>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 20,
    position: "relative",
    marginVertical: 20,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    color: "white",
    marginTop: 40,
    marginLeft: 20,
    letterSpacing: 2,
  },

  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    color: "white",
    marginTop: 20,
    marginLeft: 20,
    letterSpacing: 3,
  },
  iconContainer: {
    position: "absolute",
    top: -20,
    left: 0,
    width: 70,
    height: 70,
    backgroundColor: "black",
    borderRadius: 70 / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },

  icon: {
    width: 50,
    height: 50,
    tintColor: "white",
  },

  graphContainer: {
    position: "relative",
    left: -50,
    top: -20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
  },
});
