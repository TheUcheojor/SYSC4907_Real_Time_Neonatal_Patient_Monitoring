/**
 * Author: Paul Okenne
 * File: TripDetailPage
 * Purpose: Exports the trip-detail page which contains a breakdown of a given trip
 */
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { DatabaseService } from "../../services/database/DatabaseService";
import TripRoute from "../../services/database/models/Route";
import RouteMeasurementDataPoint from "../../services/database/models/RouteMeasurementDataPoint";
import { MainStackParamList } from "../../types";
import { FlashList } from "@shopify/flash-list";

import {
  getSimplifiedTimeString,
  getTripDate,
  getTripTimeString,
} from "../../utils/TimeUtil";
import { Ionicons } from "@expo/vector-icons";
import MetricDetailedLineChart, {
  GraphData,
  MetricDetailedLineChartParams,
} from "../../components/MetricDetailedLineChart";
import {
  NOISE_GRAPH_COLOUR,
  NOISE_METRIC_TITLE,
  NOISE_UNITS,
  TEMPERATURE_GRAPH_COLOUR,
  TEMPERATURE_METRIC_TITLE,
  TEMPERATURE_UNITS,
  VELOCITY_GRAPH_COLOUR,
  VELOCITY_METRIC_TITLE,
  VELOCITY_UNITS,
  VIBRATION_GRAPH_COLOUR,
  VIBRATION_METRIC_TITLE,
  VIBRATION_UNITS,
} from "../../constants/metric-contants";
import MeasurementPacket, {
  NOISE_KEY_MEASUREMENT_PACKET,
  TEMPERATURE_KEY_MEASUREMENT_PACKET,
  VELOCITY_KEY_MEASUREMENT_PACKET,
  VIBRATION_KEY_MEASUREMENT_PACKET,
} from "../../services/sensor-package/models/MeasurementPacket";

export default ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackParamList, "TripDetails">) => {
  const { routeId, isLocalTrip } = route.params;
  const [tripRoute, setRoute] = useState<TripRoute | null>(null);
  const [routeMeasurementDataPoints, setRouteMeasurementDataPoints] = useState<
    RouteMeasurementDataPoint[]
  >([]);

  const mapToMetricDataset = (
    metricKey: keyof MeasurementPacket
  ): Array<GraphData> => {
    return routeMeasurementDataPoints.map(
      (routeMeasurementDataPoint: RouteMeasurementDataPoint, index: number) => {
        return {
          x: index + 1,
          y: routeMeasurementDataPoint[metricKey] as number,
          label: routeMeasurementDataPoint.annotation
            ? getSimplifiedTimeString(
                routeMeasurementDataPoint.time as string
              ) +
              ": " +
              routeMeasurementDataPoint.annotation
            : getSimplifiedTimeString(routeMeasurementDataPoint.time as string),
          annotationLabel: routeMeasurementDataPoint.annotation,
        };
      }
    );
  };

  const datasets: MetricDetailedLineChartParams[] = [
    {
      title: VIBRATION_METRIC_TITLE,
      dataset: mapToMetricDataset(VIBRATION_KEY_MEASUREMENT_PACKET),
      graphColor: VIBRATION_GRAPH_COLOUR,
      units: VIBRATION_UNITS,
    },
    {
      title: NOISE_METRIC_TITLE,
      dataset: mapToMetricDataset(NOISE_KEY_MEASUREMENT_PACKET),
      graphColor: NOISE_GRAPH_COLOUR,
      units: NOISE_UNITS,
    },
    {
      title: TEMPERATURE_METRIC_TITLE,
      dataset: mapToMetricDataset(TEMPERATURE_KEY_MEASUREMENT_PACKET),
      graphColor: TEMPERATURE_GRAPH_COLOUR,
      units: TEMPERATURE_UNITS,
    },
    {
      title: VELOCITY_METRIC_TITLE,
      dataset: mapToMetricDataset(VELOCITY_KEY_MEASUREMENT_PACKET),
      graphColor: VELOCITY_GRAPH_COLOUR,
      units: VELOCITY_UNITS,
    },
  ];

  useEffect(() => {
    if (isLocalTrip) {
      //Fetch the local route
      DatabaseService.getConfiguredDatabaseController().then(
        (databaseService: DatabaseService) => {
          databaseService
            .getTripRouteById(routeId)
            .then((fetchedTripRoute: TripRoute | null) => {
              setRoute(fetchedTripRoute);

              if (fetchedTripRoute == null) return;

              // Fetch the associated route measurement points
              databaseService
                .getRouteMeasurementDataPointsByRouteId(routeId)
                .then(
                  (routeMeasurementDataPoints: RouteMeasurementDataPoint[]) => {
                    setRouteMeasurementDataPoints(routeMeasurementDataPoints);
                  }
                );
            });
        }
      );
    }
  }, [routeId]);

  return (
    <View style={styles.tripDetailsScreen}>
      <View style={styles.headerContainer}>
        <Text style={styles.primaryText}>TRIP BREAKDOWN </Text>
        <Text style={styles.secondaryText}>
          {tripRoute && getTripDate(tripRoute.startTime, tripRoute.endTime)}
        </Text>
        <Text style={styles.tertiaryText}>
          {tripRoute &&
            getTripTimeString(tripRoute.startTime, tripRoute.endTime)}
        </Text>
      </View>

      <Pressable
        style={styles.exitTripBreakdownContainer}
        onPress={() => navigation.navigate("Trips")}
      >
        <Ionicons name="arrow-back-circle" size={24} color="black" />

        <Text style={styles.exitTripBreakdownText}>Exit Trip Breakdown</Text>
      </Pressable>

      <View style={styles.chartsContainer}>
        <FlashList
          // contentContainerStyle={styles.chartsContainer}
          data={datasets}
          renderItem={getMetricDetailChart}
          estimatedItemSize={4}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

/**
 * Return a MetricDetailedLineChart component for the given item
 * @param item the item
 * @returns a MetricDetailedLineChart component
 */
const getMetricDetailChart = ({
  item,
}: {
  item: MetricDetailedLineChartParams;
}) => (
  <MetricDetailedLineChart
    title={item.title}
    dataset={item.dataset}
    graphColor={item.graphColor}
    units={item.units}
  />
);

const styles = StyleSheet.create({
  tripDetailsScreen: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    backgroundColor: "white",
    // padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  headerContainer: {
    marginTop: 60,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
    height: 100,
  },

  primaryText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  secondaryText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "black",
    textAlign: "center",
    // flex: 1,
  },

  tertiaryText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: "black",
    textAlign: "center",
    // flex: 1,
  },

  exitTripBreakdownContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: 20,
    // backgroundColor: "red",
  },

  exitTripBreakdownText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 13,
    textDecorationLine: "underline",
  },

  chartsContainer: {
    width: "100%",
    flex: 1,
    padding: 20,
  },
});