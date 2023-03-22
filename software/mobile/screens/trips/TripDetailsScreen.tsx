/**
 * Author: Paul Okenne
 * File: TripDetailPage
 * Purpose: Exports the trip-detail page which contains a breakdown of a given trip
 */
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { DatabaseService } from "../../services/DatabaseService";
import TripRoute, {
  isTripRouteWithStatistics,
} from "../../services/models/trips/Route";
import RouteMeasurementDataPoint from "../../services/models/trips/RouteMeasurementDataPoint";
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
  getMetricThreshold,
  getUnits,
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
} from "../../constants/metric-constants";
import MeasurementPacket, {
  NOISE_KEY_MEASUREMENT_PACKET,
  NumericMetricMeasurementPacketKey,
  NUMERIC_METRIC_MEASUREMENT_PACKET_KEYS,
  TEMPERATURE_KEY_MEASUREMENT_PACKET,
  VELOCITY_KEY_MEASUREMENT_PACKET,
  VIBRATION_KEY_MEASUREMENT_PACKET,
} from "../../services/models/sensor-package-communication/MeasurementPacket";
import RouteSegment from "../../services/models/trips/RouteSegment";
import Map from "../../components/Map";
import { Color } from "../../constants/ColorEnum";
import { ScrollView } from "react-native-gesture-handler";
import { ServerCommnunicationService } from "../../services/ServerCommunicationService";

export default ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackParamList, "TripDetails">) => {
  const [isViewLoaded, setViewLoaded] = useState<boolean>(false);
  console.log(isViewLoaded);

  const { routeId, isLocalTrip, tripRoute } = route.params;
  // const [tripRoute, setRoute] = useState<TripRoute | null>(null);
  const [routeMeasurementDataPoints, setRouteMeasurementDataPoints] = useState<
    RouteMeasurementDataPoint[]
  >([]);
  const [routeSegements, setRouteSegments] = useState<RouteSegment[]>([]);

  const [curentMapMetricSelection, setCurrentMapMetricSelection] =
    useState<NumericMetricMeasurementPacketKey>(
      VIBRATION_KEY_MEASUREMENT_PACKET
    );

  const mapToMetricDataset = (
    metricKey: keyof MeasurementPacket
  ): Array<GraphData> => {
    const segementIds: Array<number> = [];

    return routeMeasurementDataPoints.map(
      (routeMeasurementDataPoint: RouteMeasurementDataPoint, index: number) => {
        let segmentNumberText: string = "";

        if (!segementIds.includes(routeMeasurementDataPoint.segmentId)) {
          segementIds.push(routeMeasurementDataPoint.segmentId);
          segmentNumberText = `Sgmt ${segementIds.length.toString()}.`;
        }

        return {
          x: new Date(routeMeasurementDataPoint.time),
          y: routeMeasurementDataPoint[metricKey] as number,
          label:
            (segmentNumberText &&
              routeMeasurementDataPoint.annotation &&
              segmentNumberText + ":" + routeMeasurementDataPoint.annotation) ||
            segmentNumberText ||
            routeMeasurementDataPoint.annotation,
          isAnnotation:
            routeMeasurementDataPoint.annotation !== "" &&
            routeMeasurementDataPoint.annotation !== undefined,
          isSegmentLabel: segmentNumberText !== "",
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
      setViewLoaded(false);

      console.log(isViewLoaded);
      //Fetch the local route
      DatabaseService.getConfiguredDatabaseController().then(
        (databaseService: DatabaseService) => {
          // Fetch the associated route segments
          databaseService
            .getRouteSegmentsByRouteId(routeId)
            .then((routeSegements: RouteSegment[]) => {
              setRouteSegments(routeSegements);
            })
            .then(() => {
              // Fetch the associated route measurement points
              databaseService
                .getRouteMeasurementDataPointsByRouteId(routeId)
                .then(
                  (routeMeasurementDataPoints: RouteMeasurementDataPoint[]) => {
                    setRouteMeasurementDataPoints(routeMeasurementDataPoints);
                  }
                )
                .then(() => {
                  setViewLoaded(true);
                });
            });
        }
      );
    } else {
      ServerCommnunicationService.getServerCommunicationService()
        .fetchSegmentsByRouteId(routeId)
        .then((routeSegements: RouteSegment[]) => {
          setRouteSegments(routeSegements);

          ServerCommnunicationService.getServerCommunicationService()
            .fetchRouteMeasurementDataPointsByRouteId(routeId)
            .then((routeMeasurementDataPoints: RouteMeasurementDataPoint[]) => {
              setRouteMeasurementDataPoints(routeMeasurementDataPoints);
              setViewLoaded(true);
            });
        });
    }

    return () => setViewLoaded(false);
    //Fetch from the server
  }, [routeId]);

  if (!isViewLoaded) {
    return (
      <View style={{ ...styles.tripDetailsScreen, justifyContent: "center" }}>
        <ActivityIndicator size="large" color={"black"} />
        <Text style={styles.secondaryText}>Loading...</Text>

        <Pressable
          style={{
            marginVertical: 50,
          }}
          onPress={() => navigation.navigate("Trips")}
        >
          <Text style={styles.exitTripBreakdownText}>Exit Trip Breakdown</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.tripDetailsScreen}>
      <View style={styles.headerContainer}>
        <Text style={styles.primaryText}>TRIP BREAKDOWN </Text>
        <Text style={{ ...styles.secondaryText }}>
          Patient {tripRoute.patientId}
        </Text>

        <Text style={{ ...styles.tertiaryText, fontSize: 14 }}>
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

      <ScrollView>
        {isTripRouteWithStatistics(tripRoute) && (
          <View key="trip-details" style={{ ...styles.sectionContainer }}>
            <Text style={{ ...styles.primaryText, ...styles.alignTextLeft }}>
              Trip Details
            </Text>
            <View style={styles.statRow}>
              <Text style={styles.routeSegmentText}>
                Total Vibration: {tripRoute.total_vibration}{" "}
                {getUnits("avg_vibration")}
              </Text>
              <Text style={styles.routeSegmentText}>
                Average Velocity: {tripRoute.avg_velocity}{" "}
                {getUnits("avg_velocity")}
              </Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.routeSegmentText}>
                Average Noise: {tripRoute.avg_noise} {getUnits("avg_noise")}
              </Text>
              <Text style={styles.routeSegmentText}>
                Average Temperature: {tripRoute.avg_temperature}{" "}
                {getUnits("avg_temperature")}
              </Text>
            </View>

            <View key="stats" style={styles.statRow}>
              <Text style={styles.routeSegmentText}>
                Average Vibration: {tripRoute.avg_vibration}{" "}
                {getUnits("avg_vibration")}
              </Text>
            </View>
          </View>
        )}
        <View key="route-segments" style={{ ...styles.sectionContainer }}>
          <Text style={{ ...styles.primaryText, ...styles.alignTextLeft }}>
            Route Segments
          </Text>
          {routeSegements.map((routeSegment: RouteSegment) => (
            <Text style={styles.routeSegmentText}>
              {getTripTimeString(routeSegment.startTime, routeSegment.endTime) +
                ": " +
                routeSegment.segmentType}
            </Text>
          ))}
        </View>
        <View key="metric-map" style={{ ...styles.sectionContainer }}>
          <Text style={{ ...styles.primaryText, ...styles.alignTextLeft }}>
            Metric Map
          </Text>
          <Map
            routeMeasurementDataPoints={routeMeasurementDataPoints}
            metricThreshold={getMetricThreshold(curentMapMetricSelection)}
            metricKey={curentMapMetricSelection}
          />

          <View style={styles.metricMapMenu}>
            {NUMERIC_METRIC_MEASUREMENT_PACKET_KEYS.map(
              (metricKey: NumericMetricMeasurementPacketKey) => {
                const isSelected: boolean =
                  metricKey == curentMapMetricSelection;

                const backgroundColor: string = isSelected
                  ? Color.BLACK
                  : Color.WHITE;
                const textColour: string = isSelected
                  ? Color.WHITE
                  : Color.BLACK;

                return (
                  <Pressable
                    style={{
                      ...styles.menuButton,
                      backgroundColor: backgroundColor,
                    }}
                    onPress={() => setCurrentMapMetricSelection(metricKey)}
                  >
                    <Text
                      style={{
                        ...styles.tertiaryText,
                        ...styles.mapMenuText,
                        color: textColour,
                      }}
                    >
                      {metricKey}
                    </Text>
                  </Pressable>
                );
              }
            )}
          </View>
        </View>

        <View key="maps" style={{ ...styles.sectionContainer, flex: 1 }}>
          {datasets.map((chartParams: MetricDetailedLineChartParams) => {
            return getMetricDetailChart({ item: chartParams });
          })}
        </View>
      </ScrollView>
    </View>
  );
};

/**
 * View Constants
 */
const ESTIMATED_GRAPH_ITEM_SIZE: number = 2;

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
    marginBottom: 5,
    // backgroundColor: "red",
  },

  exitTripBreakdownText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 13,
    textDecorationLine: "underline",
  },

  sectionContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  alignTextLeft: {
    textAlign: "left",
  },

  routeSegmentContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  routeSegmentText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
  },

  metricMapMenu: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 15,
  },

  mapMenuText: {
    color: "black",
    textTransform: "capitalize",
  },

  menuButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
