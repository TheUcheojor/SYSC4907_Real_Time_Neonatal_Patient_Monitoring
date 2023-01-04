// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
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
import { DatabaseService } from "./services/database/DatabaseService";
import AppIcon from "./components/AppIcon";
import SensorPackageController from "./services/sensor-package/SensorPackageController";
import { RouteRecordingState } from "./types";
import { generateRandomMeasurementPacket } from "./utils/RandomUtil";
import MeasurementPacket from "./services/sensor-package/models/MeasurementPacket";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [isDependenciesLoaded, setDependenciesLoaded] =
    useState<boolean>(false);

  const [recordingState, setRecordingState] = useState<RouteRecordingState>(
    RouteRecordingState.NOT_RECORDING
  );
  const [measurementPacket, setMeasurementPacket] = useState<MeasurementPacket>(
    generateRandomMeasurementPacket()
  );

  //Load dependencies
  const loadDependencies = useCallback(async () => {
    await DatabaseService.getConfiguredDatabaseController();
    await SensorPackageController.requestForPermissions();
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
      />
      <StatusBar />
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
