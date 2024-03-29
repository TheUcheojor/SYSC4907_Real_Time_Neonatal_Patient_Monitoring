import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigationContainer } from "./navigation/StackNavigationContainer";
import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold_Italic,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

import { LogBox } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { DatabaseService } from "./services/DatabaseService";
import AppIcon from "./components/AppIcon";
import SensorPackageController from "./services/SensorPackageController";
import { RootStackParamList, RouteRecordingState } from "./types";
import { generateRandomMeasurementPacket } from "./utils/RandomUtil";
import MeasurementPacket from "./services/models/sensor-package-communication/MeasurementPacket";
import demoRouteDataPoints from "./mock/demoRouteDataPoints";
import { ServerCommnunicationService } from "./services/ServerCommunicationService";
import { useNavigationContainerRef } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const STATUS_BAR_STYLE: StatusBarStyle = "dark";

export default function App() {
  const [isDependenciesLoaded, setDependenciesLoaded] =
    useState<boolean>(false);

  const [recordingState, setRecordingState] = useState<RouteRecordingState>(
    RouteRecordingState.NOT_RECORDING
  );
  const [measurementPacket, setMeasurementPacket] = useState<MeasurementPacket>(
    generateRandomMeasurementPacket(demoRouteDataPoints[0].location)
  );

  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  //Load dependencies
  const loadDependencies = useCallback(async () => {
    await DatabaseService.getConfiguredDatabaseController();
    await SensorPackageController.requestForPermissions();
    ServerCommnunicationService.init(navigationRef);

    setDependenciesLoaded(true);
  }, []);

  useEffect(() => {
    loadDependencies();
  }, [loadDependencies]);

  // Load the fonts
  let [fontsLoaded]: [boolean, Error | null] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
  });

  if (!isDependenciesLoaded || !fontsLoaded) {
    return (
      <View style={styles.loadingPageContainer}>
        <AppIcon size={400} />
        <Text style={styles.title}>TCA</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StackNavigationContainer
        recordingState={recordingState}
        setRecordingState={setRecordingState}
        measurementPacket={measurementPacket}
        setMeasurementPacket={setMeasurementPacket}
        navigationRef={navigationRef}
      />
      <StatusBar hidden={false} style={STATUS_BAR_STYLE} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingPageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    letterSpacing: 5,
  },
});
