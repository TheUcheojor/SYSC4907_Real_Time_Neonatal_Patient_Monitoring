/**
 * Author: Paul Okenne
 * File: MetricLiveView
 * Purpose: Exports a component that displays metrics in real time and exports supporting interfaces/constants
 */
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";

import { VictoryLine, VictoryChart, VictoryAxis } from "victory-native";

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
  // console.log(liveData);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={iconImageSource} />
      </View>
      <Text style={styles.title}>{metricTitle}</Text>
      <Text style={styles.text}>
        {" "}
        {liveData[liveData.length - 1]} {unitsLabel}
      </Text>

      <View style={styles.graphContainer}>
        <VictoryChart width={270} height={150}>
          <VictoryLine
            style={{
              data: { stroke: graphColor },
            }}
            data={liveData}
          />

          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fill: "transparent" },
              grid: { stroke: "transparent" },
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 200,
    backgroundColor: "black",
    borderRadius: 20,
    position: "relative",
    marginVertical: 20,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: "white",
    marginTop: 40,
    marginLeft: 20,
    letterSpacing: 3,
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
    width: 200,
    top: -20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 0,
  },
});
