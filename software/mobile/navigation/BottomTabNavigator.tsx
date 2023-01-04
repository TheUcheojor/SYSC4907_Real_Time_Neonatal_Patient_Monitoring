import { StyleSheet } from "react-native";
import { MainStackParamList, SharedScreenResources } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "../screens/SettingsScreen";
import ParamedicScreen from "../screens/ParamedicScreen";
import DriverScreen from "../screens/DriverScreen";

import MenuItemContainer from "../components/MenuItemContainer";
import MainHeader from "../components/MainHeader";

import TripsTopTabNavigator from "./TripsTopTabNavigator";
import TripDetailsScreen from "../screens/trips/TripDetailsScreen";

const BottomTab = createBottomTabNavigator<MainStackParamList>();

/**
 * The main navigation containing only core screens accessible through
 * authenication
 */
export default ({
  recordingState,
  setRecordingState,
  measurementPacket,
  setMeasurementPacket,
}: SharedScreenResources) => (
  <BottomTab.Navigator
    initialRouteName="Paramedic"
    screenOptions={({ navigation }: { navigation: any }) => ({
      headerTitle: () => (
        <MainHeader recordingState={recordingState} navigation={navigation} />
      ),
      // header: (navigation ) => <MainHeader {...navigation}} />,
      // headerStatusBarHeight: 50,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerShown: true,
      tabBarShowLabel: false,
      tabBarStyle: styles.menuContainer,
    })}
  >
    <BottomTab.Screen
      name="Driver"
      // component={DriverScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Driver" focused={focused} />
        ),
      }}
    >
      {(props) => (
        <DriverScreen
          recordingState={recordingState}
          setRecordingState={setRecordingState}
          measurementPacket={measurementPacket}
          setMeasurementPacket={setMeasurementPacket}
        />
      )}
    </BottomTab.Screen>
    <BottomTab.Screen
      name="Paramedic"
      // component={ParamedicScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Paramedic" focused={focused} />
        ),
      }}
    >
      {(props) => (
        <ParamedicScreen
          recordingState={recordingState}
          setRecordingState={setRecordingState}
          measurementPacket={measurementPacket}
          setMeasurementPacket={setMeasurementPacket}
        />
      )}
    </BottomTab.Screen>

    <BottomTab.Screen
      name="Trips"
      // component={TripsTopTabNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Trips" focused={focused} />
        ),
      }}
    >
      {(props) => (
        <TripsTopTabNavigator
          recordingState={recordingState}
          setRecordingState={setRecordingState}
          measurementPacket={measurementPacket}
          setMeasurementPacket={setMeasurementPacket}
        />
      )}
    </BottomTab.Screen>
    <BottomTab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Settings" focused={focused} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "black",
    height: 110,
  },
});
