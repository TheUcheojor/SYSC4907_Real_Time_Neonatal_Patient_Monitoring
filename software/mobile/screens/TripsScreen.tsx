import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MainStackParamList } from "../types";

/**
 * The trips screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Trips">): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text> This is the trips screen</Text>
    </View>
  );
};
