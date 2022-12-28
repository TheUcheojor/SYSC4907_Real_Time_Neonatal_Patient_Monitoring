// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigationContainer } from "./navigation/StackNavigationContainer";
import { View, Text } from "react-native";
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
import React, { useState } from "react";
import { RecordingState } from "./components/TripRecorder";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [recordingState, setRecordingState] = useState<RecordingState>(
    RecordingState.NOT_RECORDING
  );

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
  });

  return fontsLoaded ? (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <StackNavigationContainer
        recordingState={recordingState}
        setRecordingState={setRecordingState}
      />

      <StatusBar />
    </SafeAreaProvider>
  ) : (
    // </GestureHandlerRootView>
    // <GestureHandlerRootView>
    <View></View>
    // </GestureHandlerRootView>
  );
}
