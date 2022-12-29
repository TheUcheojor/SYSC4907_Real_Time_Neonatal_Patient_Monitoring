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
import { RecordingState } from "./components/TripRecorder";
import { DatabaseController } from "./controllers/database/DatabaseController";
import AppIcon from "./components/AppIcon";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [isDatabaseLoaded, setDatabaseLoaded] = useState<boolean>(false);

  const [recordingState, setRecordingState] = useState<RecordingState>(
    RecordingState.NOT_RECORDING
  );

  //Load the database
  const loadDatabase = useCallback(async () => {
    await DatabaseController.getConfiguredDatabaseController();
    setDatabaseLoaded(true);

    // console.log("here");
  }, []);

  useEffect(() => {
    loadDatabase();
  }, [loadDatabase]);

  // Load the fonts
  let [fontsLoaded]: [boolean, Error | null] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
  });

  if (!isDatabaseLoaded || !fontsLoaded) {
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
