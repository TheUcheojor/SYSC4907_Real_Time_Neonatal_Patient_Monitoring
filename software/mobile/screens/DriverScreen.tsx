import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Gauge from "../components/Gauge/Gauge";

import { MainStackParamList } from "../types";

/**
 * The driver screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Driver">): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Gauge />
    </View>
  );
};
