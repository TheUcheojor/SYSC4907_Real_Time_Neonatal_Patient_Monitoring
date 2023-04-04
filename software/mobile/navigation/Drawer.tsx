import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import {
  MainStackParamList,
  RouteRecordingState,
  SharedScreenResources,
} from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import AppIcon from "../components/AppIcon";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import TripDetailsScreen from "../screens/trips/TripDetailsScreen";
import UserSessionService from "../services/UserSessionService";
import SensorPackageController from "../services/SensorPackageController";
import { useEffect, useState } from "react";

const Drawer = createDrawerNavigator<MainStackParamList>();

export default ({
  recordingState,
  setRecordingState,
  measurementPacket,
  setMeasurementPacket,
}: SharedScreenResources) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerMenu
          recordingState={recordingState}
          setRecordingState={setRecordingState}
          measurementPacket={measurementPacket}
          setMeasurementPacket={setMeasurementPacket}
          navigation={props.navigation}
        />
      )}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        swipeEnabled: false,
        drawerType: "front",
      }}
    >
      <Drawer.Screen name="BottomTab">
        {(props) => (
          <BottomTabNavigator
            recordingState={recordingState}
            setRecordingState={setRecordingState}
            measurementPacket={measurementPacket}
            setMeasurementPacket={setMeasurementPacket}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="TripDetails"
        component={TripDetailsScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

const CustomDrawerMenu = ({
  navigation,
  setMeasurementPacket,
}: SharedScreenResources & {
  navigation: DrawerNavigationHelpers;
}): JSX.Element => {
  /**
   * Mocking a feed from the sensor package
   * This allows developers to simulate the sensor package
   */
  const [generateMeasurementPacketInterval, setMeasurementPacketInterval] =
    useState<NodeJS.Timer | null>(null);

  // Clean up feed interval
  useEffect(() => {
    return () => stopDemoFeed();
  }, [generateMeasurementPacketInterval]);

  const startDemoFeed = () => {
    const sensorPackageController: SensorPackageController =
      SensorPackageController.getSensorPackageController();

    setMeasurementPacketInterval(
      sensorPackageController.mockMeasurementPacketFeed(setMeasurementPacket)
    );
  };

  const stopDemoFeed = () => {
    if (!generateMeasurementPacketInterval) return;

    clearInterval(generateMeasurementPacketInterval);
    setMeasurementPacketInterval(null);
  };

  /**
   * Log out user and delete their session.
   * @param navigation screen navigation
   */
  const handleLogOut = (navigation: DrawerNavigationHelpers): void => {
    UserSessionService.deleteUserSession().then(() =>
      navigation.navigate("Login")
    );
  };
  return (
    <DrawerContentScrollView>
      <View style={style.header}>
        <AppIcon size={80} />
      </View>

      {!generateMeasurementPacketInterval && (
        <DrawerItem
          labelStyle={style.appName}
          label="START DEMO"
          icon={() => <AntDesign name="play" size={24} color="black" />}
          onPress={startDemoFeed}
        />
      )}

      {generateMeasurementPacketInterval && (
        <DrawerItem
          labelStyle={style.appName}
          label="END DEMO"
          icon={() => (
            <FontAwesome name="stop-circle-o" size={24} color="black" />
          )}
          onPress={stopDemoFeed}
        />
      )}
      <DrawerItem
        labelStyle={style.appName}
        label="LOG OUT"
        icon={() => <Ionicons name="exit-outline" size={30} color="black" />}
        onPress={() => handleLogOut(navigation)}
      />
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  option: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
  },

  appName: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    textAlign: "left",
    flexDirection: "row",

    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
});
