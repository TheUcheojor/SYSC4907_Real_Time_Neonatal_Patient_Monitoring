import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  GAUGE_MAX_DEFAULT,
  LOW_TO_MODERATE_THRESHOLD_DEFAULT,
  MODERATE_TO_HIGH_THRESHOLD_DEFAULT,
} from "../components/gauge/constants";
import Gauge from "../components/gauge/Gauge";
import { VIBRATION_UNITS } from "../constants/metric-constants";
import { SharedScreenResources } from "../types";

/**
 * The driver screen
 */
export default ({ measurementPacket }: SharedScreenResources): JSX.Element => {
  const metricLevel: React.MutableRefObject<number> = useRef<number>(0);

  /**
   *  The following constants are not used now but down the line, they provide users functionality
   *  that allows for the modification of gauge settings
   * */
  const [lowModerateThreshold, setLowModerateThreshold] = useState<number>(
    LOW_TO_MODERATE_THRESHOLD_DEFAULT
  );
  const [moderateHighThreshold, setModerateHighThreshold] = useState<number>(
    MODERATE_TO_HIGH_THRESHOLD_DEFAULT
  );
  const [gaugeMax, setGaugeMax] = useState<number>(GAUGE_MAX_DEFAULT);
  const [guageUnits, setGuageUnits] = useState<string>(VIBRATION_UNITS);

  useEffect(() => {
    metricLevel.current = measurementPacket.vibration;
  }, [measurementPacket]);

  return (
    <View style={styles.driverScreen}>
      <Gauge
        currentMetricLevel={metricLevel.current}
        lowModerateThreshold={lowModerateThreshold}
        moderateHighThreshold={moderateHighThreshold}
        gaugeMax={gaugeMax}
        units={guageUnits}
      />
      <Text style={styles.gaugeTitle}>VIBRATION</Text>
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
