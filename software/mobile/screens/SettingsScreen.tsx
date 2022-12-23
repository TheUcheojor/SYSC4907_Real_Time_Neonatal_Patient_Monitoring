import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MainStackParamList } from "../types";

/**
 * The setttings screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Settings">): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text> This is the settings screen</Text>
    </View>
  );
};
