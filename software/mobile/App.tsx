import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "./routes";
import { View } from "react-native";
import {
  useFonts,
  Montserrat_600SemiBold_Italic,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return fontsLoaded ? (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar />
    </SafeAreaProvider>
  ) : (
    <View></View>
  );
}
