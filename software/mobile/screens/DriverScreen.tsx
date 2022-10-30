import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MainStackParamList } from "../types";

/**
 * The driver screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Driver">): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the driver screen</Text>
    </View>
  );
};
