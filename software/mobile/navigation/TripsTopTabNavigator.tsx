/**
 * Author: Paul Okenne
 * File: TripsTopTabNavigator
 * Purpose: Exports the tab navigator for the trips screen
 */
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ActiveTripScreen from "../screens/trips/ActiveTripScreen";
import TripQueryScreen from "../screens/trips/TripQueryScreen";
import { TripsStackParamList } from "../types";

const TopTab = createMaterialTopTabNavigator<TripsStackParamList>();

export default () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="ActiveTrip"
        component={ActiveTripScreen}
        options={{
          tabBarLabel: "Current",
        }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="TripQuery"
        component={TripQueryScreen}
        options={{
          tabBarLabel: "Search",
        }}
      ></TopTab.Screen>
    </TopTab.Navigator>
  );
};
