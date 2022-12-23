import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../types";

/**
 * The signup screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Signup">): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text> This is the signup screen</Text>
    </View>
  );
};
