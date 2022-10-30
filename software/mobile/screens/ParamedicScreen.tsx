import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MainStackParamList } from "../types";

/**
 * The paramedic screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Paramedic">): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> This is the paramedic screen</Text>
    </View>
  );
};
