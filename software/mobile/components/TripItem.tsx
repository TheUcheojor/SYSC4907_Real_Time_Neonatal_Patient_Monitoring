/**
 * Author: Paul Okenne
 * File: TripItem
 * Purpose: Exports a trip item, containing high level details about the trip
 */

import { View, Text, Pressable, StyleSheet } from "react-native";
import TripRoute from "../services/models/trips/Route";
import { getTripDate, getTripTimeString } from "../utils/TimeUtil";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../types";
import ServerTripRoute from "../services/models/server-communication/ServerTripRoute";

interface TripItemParams {
  tripRoute: TripRoute | ServerTripRoute;
  isLocalTrip: boolean;
}

export default ({ tripRoute, isLocalTrip }: TripItemParams): JSX.Element => {
  const navigation: NavigationProp<MainStackParamList> = useNavigation();

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
          routeId: tripRoute.routeId,
          isLocalTrip: isLocalTrip,
        })
      }
    >
      <View style={styles.tripItemDateContainer}>
        <Text style={styles.primaryText}>
          {getTripDate(tripRoute.startTime, tripRoute.endTime)}
        </Text>
        <Text style={styles.tertiaryText}>
          {getTripTimeString(tripRoute.startTime, tripRoute.endTime)}
        </Text>
      </View>

      <View style={styles.tripItemPatientDetailsContainer}>
        {tripRoute.patientId && (
          <Text style={styles.primaryText}>
            Patient{" "}
            <Text style={styles.primaryText}>{tripRoute.patientId}</Text>
          </Text>
        )}

        {!isLocalTrip && (
          <View style={styles.statsContainer}>
            <Text style={styles.tertiaryText}>Total Vibration: </Text>
            <Text style={styles.tertiaryText}>
              {(tripRoute as ServerTripRoute).totalVibrationExposure} Hz
            </Text>
          </View>
        )}
      </View>
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
});
