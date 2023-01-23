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
import { DatabaseService } from "../services/DatabaseService";
import TripRoute from "../services/models/trips/Route";
import { MainStackParamList, RouteRecordingState } from "../types";
import { getTripDate, getTripTimeString } from "../utils/TimeUtil";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import { FlashList } from "@shopify/flash-list";
import TripItem from "./TripItem";
import RouteSegment from "../services/models/trips/RouteSegment";
import RouteMeasurementDataPoint from "../services/models/trips/RouteMeasurementDataPoint";
import { generateServerRouteModel } from "../utils/ServerModelTransformerUtil";
import { ServerCommnunicationService } from "../services/ServerCommunicationService";
import { BaseServerResponse } from "../services/models/server-communication/requests/BaseServerResponse";
import { SystemErrors } from "../constants/SystemErrors";
import { ServerUploadRouteResponse } from "../services/models/server-communication/requests/UploadRouteRequestResponse";
import { Color } from "../constants/ColorEnum";

/**
 * View Constants
 */
interface LocalTripsParams {}

const ERROR_DISPLAY_PERIOD_MILLISECONDS: number = 3000;

export default ({}: LocalTripsParams) => {
  const [localTrips, setLocalTrips] = useState<Array<TripRoute>>([]);

  const [uploadingError, setUploadingError] = useState<SystemErrors>(
    SystemErrors.NO_ERROR
  );

  /**
   * Fetches local trips from the database
   *
   * Right now, the system is fetching all the the local routes at a time which scales poorly.
   * I created a getRoutesWithRestrictions function for controlled paginated fetching but there was weird
   * behaviours. Since optimization is not a major concern at initial development stages, the system will use
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
    ({ item }: { item: TripRoute }): JSX.Element => (
      <TripItem tripRoute={item} isLocalTrip={true} />
    ),
    []
  );

  const uploadTrips = () => {
    console.log("uploadTrips!");
    // Map each trip to a promise returing the server response
    const serverPostRouteRequests: Promise<ServerUploadRouteResponse>[] =
      localTrips.map((trip: TripRoute) => {
        //Get the database service
        return DatabaseService.getConfiguredDatabaseController().then(
          (databaseService: DatabaseService) => {
            //Fetch related trip segments
            return databaseService
              .getRouteSegmentsByRouteId(trip.routeId)
              .then((routeSegments: RouteSegment[]) => {
                //Fetch related trip data points
                return databaseService
                  .getRouteMeasurementDataPointsByRouteId(trip.routeId)
                  .then(
                    (
                      routeMeasurementDataPoints: RouteMeasurementDataPoint[]
                    ) => {
                      // Upload the trip
                      return ServerCommnunicationService.getServerCommunicationService().uploadTrip(
                        generateServerRouteModel(
                          trip,
                          routeSegments,
                          routeMeasurementDataPoints
                        ),
                        trip.routeId
                      );
                    }
                  );
              });
          }
        );
      });

    /**
     * After all the promises have been resolved, the app verifies that there
     * was no errors
     */
    Promise.allSettled(serverPostRouteRequests).then(
      (promiseResults: PromiseSettledResult<ServerUploadRouteResponse>[]) => {
        const FULFILLED_PROMISE_STATUS: "rejected" | "fulfilled" = "fulfilled";
        let uploadFailed: boolean = false;
        console.log(promiseResults);
        promiseResults.forEach(
          (promiseResult: PromiseSettledResult<ServerUploadRouteResponse>) => {
            if (promiseResult.status == FULFILLED_PROMISE_STATUS) {
              if (!promiseResult.value.isSuccessful) {
                uploadFailed = true;
              } else {
                DatabaseService.getConfiguredDatabaseController().then(
                  (databaseService: DatabaseService) => {
                    databaseService.deleteAllRelatedContentsByRouteId(
                      promiseResult.value.deletedTripRouteId
                    );
                  }
                );
                // .then(clearTrips);
              }
            }
          }
        );

        setUploadingError(SystemErrors.UPLOADING_ERROR);
        setTimeout(
          () => setUploadingError(SystemErrors.NO_ERROR),
          ERROR_DISPLAY_PERIOD_MILLISECONDS
        );
      }
    );
  };

  return (
    <View style={styles.localTripsComponentContainer}>
      <View style={styles.headerMenu}>
        <Text style={styles.headerMenuTitle}>Local Trips</Text>
        <View style={styles.headerMenuIconsContainer}>
          <Pressable onPress={getLocalTrips}>
            {({ pressed }: { pressed: boolean }) => (
              <Ionicons
                name="reload-circle"
                style={styles.icon}
                size={35}
                color={!pressed ? Color.BLACK : Color.DARK_GREY}
              />
            )}
          </Pressable>

          <Pressable onPress={uploadTrips}>
            {({ pressed }: { pressed: boolean }) => (
              <Ionicons
                style={styles.icon}
                name="cloud-upload"
                size={35}
                color={!pressed ? Color.BLACK : Color.DARK_GREY}
              />
            )}
          </Pressable>

          <Pressable onPress={clearTrips}>
            {({ pressed }: { pressed: boolean }) => (
              <MaterialIcons
                style={styles.icon}
                name="clear"
                size={35}
                color={!pressed ? Color.BLACK : Color.RED}
              />
            )}
          </Pressable>
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

const ICON_DEFAULT_COLOUR: string = "black";

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
});
