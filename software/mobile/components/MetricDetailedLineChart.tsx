/**
 * Author: Paul Okenne
 * File: MetricDetailedLineChart
 * Purpose: Exports a detailed line chart
 */

import { View, StyleSheet, Text } from "react-native";
import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
  VictoryZoomContainer,
  VictoryScatter,
  VictoryTheme,
} from "victory-native";

export interface GraphData {
  x: number;
  y: number;
  label: string;
  annotationLabel: string | undefined;
}

export interface MetricDetailedLineChartParams {
  dataset: Array<GraphData>;
  title: string;
  graphColor: string;
  units: string;
}

const KEY_POINT_COLOUR: string = "#C2372E";

const NUMBER_OF_VISIBLE_POINTS: number = 5;

export default ({
  dataset,
  title,
  graphColor,
  units,
}: MetricDetailedLineChartParams) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.chartTitle}>{title}</Text>
      <View style={styles.graphContainer}>
        <VictoryChart
          style={{
            parent: {
              maxWidth: "50%",
              maxHeight: "50%",
              position: "absolute",
              top: -40,
              left: 0,
            },
          }}
          height={250}
          theme={VictoryTheme.material}
          domainPadding={{ x: [100, 25], y: [10, 60] }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              downsample={NUMBER_OF_VISIBLE_POINTS}
            />
          }
        >
          <VictoryArea
            interpolation="monotoneX"
            style={{
              data: {
                stroke: graphColor,
                fill: graphColor,

                fillOpacity: 0.2,
                strokeWidth: 2,
              },
              labels: { stroke: "transparent", fill: "transparent" },
            }}
            data={dataset}
            padding={{ right: 20 }}
          />

          <VictoryScatter
            size={({ datum }) => (datum.annotationLabel ? 5 : 2)}
            symbol={({ datum }) => (datum.annotationLabel ? "star" : "circle")}
            style={{
              data: {
                fill: ({ datum }) =>
                  datum.annotationLabel ? KEY_POINT_COLOUR : graphColor,
                stroke: ({ datum }) =>
                  datum.annotationLabel ? KEY_POINT_COLOUR : graphColor,
                strokeWidth: 2,
              },

              labels: {
                stroke: KEY_POINT_COLOUR,
                fill: ({ datum }) =>
                  datum.annotationLabel ? KEY_POINT_COLOUR : graphColor,
                fontFamily: "Montserrat_700Bold",
                fontSize: 10,
                // angle: -30,
                dx: 5,
              },
            }}
            data={dataset}
            padding={{ right: 20 }}
          />

          <VictoryAxis
            dependentAxis
            crossAxis={false}
            minDomain={{ y: 100 }}
            label={units}
            style={{
              axis: { stroke: "white" },
              ticks: { stroke: "white" },
              tickLabels: { stroke: "grey" },
              grid: { stroke: "grey" },
              axisLabel: {
                dy: -25,
                fontFamily: "Montserrat_700Bold",
                fontSize: 12,
              },
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "hidden",
    marginVertical: 10,
  },
  chartTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
  graphContainer: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 200,
    overflow: "hidden",
  },

  graph: {
    backgroundColor: "black",
    fill: "black",
    stroke: "black",
  },
});
