import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  GAUGE_MAX_DEFAULT,
  LOW_TO_MODERATE_THRESHOLD_DEFAULT,
  MODERATE_TO_HIGH_THRESHOLD_DEFAULT,
} from "../components/Gauge/constants";
import Gauge from "../components/Gauge/Gauge";
import { getRandomInt } from "../components/Gauge/util";

import { MainStackParamList } from "../types";

/**
 * The driver screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "Driver">): JSX.Element => {
  const [metricLevel, setMetricLevel] = useState<number>(0);
  const [lowModerateThreshold, setLowModerateThreshold] = useState<number>(
    LOW_TO_MODERATE_THRESHOLD_DEFAULT
  );
  const [moderateHighThreshold, setModerateHighThreshold] = useState<number>(
    MODERATE_TO_HIGH_THRESHOLD_DEFAULT
  );

  const [gaugeMax, setGaugeMax] = useState<number>(GAUGE_MAX_DEFAULT);

  return (
    <View style={styles.driverScreen}>
      <Gauge
        currentMetricLevel={metricLevel}
        lowModerateThreshold={lowModerateThreshold}
        moderateHighThreshold={moderateHighThreshold}
        gaugeMax={gaugeMax}
      />
      <Text style={styles.gaugeTitle}>VIBRATION</Text>

      <Button
        title="DEMO"
        onPress={() => {
          setMetricLevel(getRandomInt(0, 180));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  driverScreen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  gaugeTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 40,
    color: "#969696",
    margin: 50,
  },
});
