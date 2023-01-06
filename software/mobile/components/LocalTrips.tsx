/**
 * Author: Paul Okenne
 * File: LocalTrips
 * Purpose: Exports the local trips components which reveals trips stored in the database
 */
import { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  TextStyle,
  ScrollView,
} from "react-native";
import { ResultSet } from "react-native-sqlite-storage";
import { DatabaseService } from "../services/database/DatabaseService";
import TripRoute from "../services/database/models/Route";
import { MainStackParamList, RouteRecordingState } from "../types";
import { getTripDate, getTripTimeString } from "../utils/TimeUtil";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

export default ({}: LocalTripsParams) => {
  const navigation: NavigationProp<MainStackParamList> = useNavigation();
  const [localTrips, setLocalTrips] = useState<Array<TripRoute>>([]);

  /**
   * Fetches local trips from the database
   *
   * Right now, the system is fetching all the the local routes at a time which scales poorly.
   * I created a getRoutesWithRestrictions function for controlled paginated fetching but there was weird
   * behaviours. Since optimization is not a major concern at initial development  stages, the system will use
   * the fetch-all behaviour for now and optimizations can be made if time permits
   */
  const getLocalTrips = () => {
    DatabaseService.getConfiguredDatabaseController().then(
      (databaseService: DatabaseService) => {
        databaseService.getAllRoutes().then((results: [ResultSet]) => {
          const result: ResultSet = results[0];
          const newLocalTrips: Array<TripRoute> = [];

          for (let index = 0; index < result.rows.length; index++) {
            newLocalTrips.push(result.rows.item(index));
          }
          setLocalTrips(newLocalTrips);
        });
      }
    );
  };

  /**
   * Fetch local trips on page transition
   */
  useEffect(() => {
    getLocalTrips();
  }, []);

  const clearTrips = () => {
    setLocalTrips([]);
  };

  /**
   * Given an trip item, return the trip item component
   */
  const getLocalTripItem = useCallback(
    ({ item }: { item: TripRoute }): JSX.Element => {
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
              isLocalTrip: true,
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
    },
    []
  );

  return (
    <View style={styles.localTripsComponentContainer}>
      <View style={styles.headerMenu}>
        <Text style={styles.headerMenuTitle}>Local Trips</Text>
        <View style={styles.headerMenuIconsContainer}>
          <Ionicons
            name="reload-circle"
            style={styles.icon}
            size={35}
            color={ICON_DEFAULT_COLOUR}
            onPress={getLocalTrips}
          />
          <Ionicons
            style={styles.icon}
            name="cloud-upload"
            size={35}
            color={ICON_DEFAULT_COLOUR}
          />
          <MaterialIcons
            style={styles.icon}
            name="clear"
            size={35}
            color="black"
            onPress={clearTrips}
          />
        </View>
      </View>

      <FlashList
        data={localTrips}
        renderItem={getLocalTripItem}
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

/**
 * View Constants
 */
interface LocalTripsParams {
  // recordingState: RouteRecordingState;
}

const ICON_DEFAULT_COLOUR: string = "black";
const TRIP_ITEM_PRESS_COLOUR: string = "#2F2F2F";

const styles = StyleSheet.create({
  localTripsComponentContainer: {
    flex: 1,
    zIndex: 1,
    flexDirection: "column",
    // backgroundColor: "red",
    marginVertical: 10,
    width: "95%",
  },

  headerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },

  headerMenuTitle: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    // backgroundColor: "purple",
  },

  headerMenuIconsContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "green",
  },

  icon: {
    marginHorizontal: 5,
  },

  tripsContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "green",
  },

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
