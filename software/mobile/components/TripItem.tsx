/**
 * Author: Paul Okenne
 * File: TripItem
 * Purpose: Exports a trip item, containing high level details about the trip
 */

import { View, Text, Pressable, StyleSheet } from "react-native";
import TripRoute from "../services/database/models/Route";
import { getTripDate, getTripTimeString } from "../utils/TimeUtil";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../types";

interface TripItemParams {
  item: TripRoute;
  isLocalTrip: boolean;
}

export default ({ item, isLocalTrip }: TripItemParams): JSX.Element => {
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
          routeId: item.routeId,
          isLocalTrip: isLocalTrip,
        })
      }
    >
      <View style={styles.tripItemDateContainer}>
        <Text style={styles.tripItemMainText}>
          {getTripDate(item.startTime, item.endTime)}
        </Text>
        <Text style={styles.tripItemMinorText}>
          {getTripTimeString(item.startTime, item.endTime)}
        </Text>
      </View>

      <View style={styles.tripItemPatientDetailsContainer}>
        {item.patientId && (
          <Text style={styles.tripItemPatientText}>Patient </Text>
        )}
        <Text style={styles.tripItemPatientIdText}>{item.patientId}</Text>
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
  },

  tripItemDateContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  tripItemPatientDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  tripItemMainText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
  },
  tripItemMinorText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Montserrat_600SemiBold",
  },

  tripItemPatientText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 11,
    color: "white",
  },

  tripItemPatientIdText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 11,
    color: "white",
  },
});
