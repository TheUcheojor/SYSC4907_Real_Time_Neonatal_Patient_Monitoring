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
    <TopTab.Navigator
      tabBarPosition="top"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          borderWidth: 2,
          width: "50%",
        },
      }}
    >
      <TopTab.Screen
        name="ActiveTrip"
        component={ActiveTripScreen}
        options={{
          tabBarLabel: "Current",
          ...tabScreenStyle,
        }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="TripQuery"
        component={TripQueryScreen}
        options={{
          tabBarLabel: "Search",
          ...tabScreenStyle,
        }}
      ></TopTab.Screen>
    </TopTab.Navigator>
  );
};

const tabScreenStyle: {} = {
  tabBarLabelStyle: {
    fontStyle: "normal",
    textTransform: "capitalize",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 12,
  },
  //   headerShadowVisible: false, // applied here
};
