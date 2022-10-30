import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../types";

/**
 * The forgot-password screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text> This is the forgot password screen</Text>
    </View>
  );
};
