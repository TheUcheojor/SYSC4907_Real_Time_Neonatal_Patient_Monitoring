import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { MainStackParamList } from "../types";
import { StyleSheet } from "react-native";
import MetricLiveView from "../components/MetricLiveView";
/**
 * The paramedic screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Paramedic">): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <MetricLiveView />
    </View>
  );
};

const styles = StyleSheet.create({});
