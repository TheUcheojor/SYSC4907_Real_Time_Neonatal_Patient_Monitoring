/**
 * Author: Paul Okenne
 * File: TripItem
 * Purpose: Exports a trip item, containing high level details about the trip
 */

import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import TripRoute, { isMobileTripRoute } from "../services/models/trips/Route";
import {
  formatUnixTimestamp,
  getTripDate,
  getTripTimeString,
} from "../utils/TimeUtil";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../types";
import ServerTripRoute, {
  isServerTripRoute,
} from "../services/models/server-communication/ServerTripRoute";
import { generateMobileTripRoutes } from "../utils/ServerModelTransformerUtil";
import { VIBRATION_UNITS } from "../constants/metric-constants";
import { Color } from "../constants/ColorEnum";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DatabaseService } from "../services/DatabaseService";
interface TripItemParams {
  tripRoute: TripRoute | ServerTripRoute;
  isLocalTrip: boolean;
  getLocalTrips: () => any;
}

export default ({
  tripRoute,
  isLocalTrip,
  getLocalTrips,
}: TripItemParams): JSX.Element => {
  const navigation: NavigationProp<MainStackParamList> = useNavigation();
  // console.log(tripRoute);
  let date: string, time: string;
  let routedId: number;
  let patientId: string;

  if (isMobileTripRoute(tripRoute)) {
    date = getTripDate(tripRoute.startTime, tripRoute.endTime);
    time = getTripTimeString(tripRoute.startTime, tripRoute.endTime);
    routedId = tripRoute.routeId;
    patientId = tripRoute.patientId;
  } else {
    date = getTripDate(
      formatUnixTimestamp(tripRoute.start_time_s),
      formatUnixTimestamp(tripRoute.end_time_s)
    );
    time = getTripTimeString(
      formatUnixTimestamp(tripRoute.start_time_s),
      formatUnixTimestamp(tripRoute.end_time_s)
    );
    routedId = tripRoute.route_id;
    patientId = tripRoute.patient_id;
  }

  const deleteTrip = () => {
    const deleteMessageEnd =
      patientId.trim().length > 0
        ? `the trip for Patient ${patientId.toUpperCase()}?`
        : `the trip with ID ${routedId}?`;
    Alert.alert(
      "Local Trip Deletion",
      "Are you sure you want to delete " + deleteMessageEnd,
      [
        {
          text: "YES",
          onPress: () => {
            DatabaseService.getConfiguredDatabaseController().then(
              (databaseService: DatabaseService) => {
                databaseService
                  .deleteAllRelatedContentsByRouteId(routedId)
                  .then(() => {
                    // Refresh the trips view
                    getLocalTrips();
                  });
              }
            );
          },
          style: "destructive",
        },
        {
          text: "NO",
          onPress: () => {},
        },
      ]
    );
  };

  return (
    <Pressable
      style={({ pressed }: { pressed: boolean }) =>
        getPressedHighlightBehaviourStyle(
          pressed,
          styles.tripItemContainer,
          TRIP_ITEM_PRESS_COLOUR
        )
      }
      onPress={() =>
        navigation.navigate("TripDetails", {
          routeId: routedId,
          isLocalTrip: isLocalTrip,
          tripRoute: isServerTripRoute(tripRoute)
            ? generateMobileTripRoutes(tripRoute)
            : tripRoute,
        })
      }
    >
      <View style={styles.tripItemDateContainer}>
        <Text style={styles.primaryText}>{date}</Text>
        <Text style={styles.tertiaryText}>{time}</Text>
      </View>

      <View style={styles.tripItemPatientDetailsContainer}>
        {routedId && (
          <Text style={styles.primaryText}>
            Patient <Text style={styles.primaryText}>{patientId}</Text>
          </Text>
        )}

        {isServerTripRoute(tripRoute) && (
          <View style={styles.statsContainer}>
            <Text style={styles.tertiaryText}>Total Vibration: </Text>
            <Text style={styles.tertiaryText}>
              {tripRoute.total_vibration} {VIBRATION_UNITS}
            </Text>
          </View>
        )}
      </View>

      {isLocalTrip && (
        <View>
          <MaterialCommunityIcons
            name="delete-circle"
            size={35}
            color={Color.RED}
            onPress={deleteTrip}
          />
        </View>
      )}
    </Pressable>
  );
};

/**
 * View Constants
 */
const TRIP_ITEM_PRESS_COLOUR: string = "#2F2F2F";

const styles = StyleSheet.create({
  tripItemContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    alignContent: "center",
  },

  tripItemDateContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  tripItemPatientDetailsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    textTransform: "capitalize",
    textAlign: "center",
  },

  secondaryText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 13,
    color: "white",
    textAlign: "center",
  },
  tertiaryText: {
    color: "white",
    fontSize: 11,
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },

  statsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  deleteText: {
    fontFamily: "Montserrat_600SemiBold",
    color: Color.RED,
    fontSize: 30,
  },
});
