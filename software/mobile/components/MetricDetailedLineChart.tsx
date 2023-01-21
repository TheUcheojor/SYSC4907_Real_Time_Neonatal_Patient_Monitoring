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
  VictoryLine,
  createContainer,
  VictoryVoronoiContainer,
} from "victory-native";

export interface GraphData {
  x: Date;
  y: number;
  label?: string;
  isAnnotation: boolean;
  isSegmentLabel: boolean;
}

export interface MetricDetailedLineChartParams {
  dataset: Array<GraphData>;
  title: string;
  graphColor: string;
  units: string;
}

const ANNOTATION_COLOUR: string = "#C2372E";
const SEGMENT_LABEL_COLOUR: string = "black";

const NUMBER_OF_VISIBLE_POINTS: number = 50;

const segmentColours: Array<string> = [
  "#0E9CFF",
  "#59D9F5",
  "#9B9E0A",
  "#AA85E5",
];
const currentSegmentColourIndex: number = 0;

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
          domainPadding={{ x: [25, 0], y: 20 }}
          containerComponent={
            <VictoryZoomContainer zoomDimension="x" downsample={true} />
          }
          scale={{ x: "time", y: "linear" }}
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
            size={({ datum }: { datum: GraphData }) =>
              (datum.isAnnotation && 2) || (datum.isSegmentLabel && 2) || 0
            }
            symbol={({ datum }: { datum: GraphData }) =>
              (datum.isAnnotation && "star") ||
              (datum.isSegmentLabel && "circle")
            }
            style={{
              data: {
                fill: ({ datum }: { datum: GraphData }) =>
                  (datum.isAnnotation && ANNOTATION_COLOUR) ||
                  (datum.isSegmentLabel && SEGMENT_LABEL_COLOUR),
                stroke: ({ datum }: { datum: GraphData }) =>
                  (datum.isAnnotation && ANNOTATION_COLOUR) ||
                  (datum.isSegmentLabel && SEGMENT_LABEL_COLOUR),
                strokeWidth: 2,
              },

              labels: {
                stroke: ANNOTATION_COLOUR,
                fill: ({ datum }: { datum: GraphData }) =>
                  (datum.isAnnotation && ANNOTATION_COLOUR) ||
                  (datum.isSegmentLabel && SEGMENT_LABEL_COLOUR),
                fontFamily: "Montserrat_700Bold",
                fontSize: 10,
                angle: -30,
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
          <VictoryAxis
            style={{
              axis: { stroke: "white" },
              ticks: { stroke: "white" },
              tickLabels: { stroke: "grey" },
              grid: { stroke: "grey" },
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
