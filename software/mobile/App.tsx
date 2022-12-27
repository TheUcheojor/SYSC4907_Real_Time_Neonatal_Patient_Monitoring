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
} from "@expo-google-fonts/montserrat";

import { LogBox } from "react-native";
import React from "react";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  return fontsLoaded ? (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <StackNavigationContainer />

      <StatusBar />
    </SafeAreaProvider>
  ) : (
    // </GestureHandlerRootView>
    // <GestureHandlerRootView>
    <View></View>
    // </GestureHandlerRootView>
  );
}
