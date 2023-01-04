/**
 * Author: Paul Okenne
 * File: TripDetailPage
 * Purpose: Exports the trip-detail page which contains a breakdown of a given trip
 */
import { NavigationProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { ResultSet } from "react-native-sqlite-storage";
import { DatabaseService } from "../../services/database/DatabaseService";
import TripRoute from "../../services/database/models/Route";
import RouteMeasurementDataPoint from "../../services/database/models/RouteMeasurementDataPoint";
import { MainStackParamList, TripsStackParamList } from "../../types";
import {
  getFullTimeString,
  getSimplifiedTimeString,
  getTripDate,
  getTripTimeString,
} from "../../utils/TimeUtil";
import { Ionicons } from "@expo/vector-icons";
import MetricDetailedLineChart, {
  GraphData,
} from "../../components/MetricDetailedLineChart";
import { VIBRATION_GRAPH_COLOUR } from "../ParamedicScreen";

interface TripDetailsScreenParams extends Readonly<any> {
  routeId: string;
}

export default ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackParamList, "TripDetails">) => {
  const { routeId, isLocalTrip } = route.params;
  const [tripRoute, setRoute] = useState<TripRoute | null>(null);
  const [routeMeasurementDataPoints, setRouteMeasurementDataPoints] = useState<
    RouteMeasurementDataPoint[]
  >([]);

  const vibrationDataSet: Array<GraphData> = routeMeasurementDataPoints.map(
    (routeMeasurementDataPoint: RouteMeasurementDataPoint, index: number) => {
      return {
        x: index + 1,
        y: routeMeasurementDataPoint.vibration,
        // x: getFullTimeString(routeMeasurementDataPoint.time as string),
        // label: routeMeasurementDataPoint.annotation,
        label: routeMeasurementDataPoint.annotation
          ? getSimplifiedTimeString(routeMeasurementDataPoint.time as string) +
            ": " +
            routeMeasurementDataPoint.annotation
          : getSimplifiedTimeString(routeMeasurementDataPoint.time as string),
        annotationLabel: routeMeasurementDataPoint.annotation,
      };
    }
  );

  const temperatureDataSet: Array<number> = routeMeasurementDataPoints.map(
    (routeMeasurementDataPoint: RouteMeasurementDataPoint) =>
      routeMeasurementDataPoint.temperature
  );

  const velocityDataSet: Array<number> = routeMeasurementDataPoints.map(
    (routeMeasurementDataPoint: RouteMeasurementDataPoint) =>
      routeMeasurementDataPoint.temperature
  );

  const noiseDataSet: Array<number> = routeMeasurementDataPoints.map(
    (routeMeasurementDataPoint: RouteMeasurementDataPoint) =>
      routeMeasurementDataPoint.noise
  );

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
        <MetricDetailedLineChart
          title="Vibration"
          dataset={vibrationDataSet}
          graphColor={VIBRATION_GRAPH_COLOUR}
          units="Hz"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tripDetailsScreen: {
    flex: 1,
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
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    // margin: 20,
    // backgroundColor: "red",
  },
});
