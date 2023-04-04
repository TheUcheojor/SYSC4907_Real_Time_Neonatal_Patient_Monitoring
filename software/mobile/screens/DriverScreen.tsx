/**
 * File: DriverScreen
 * Author: Paul Okenne
 * Purpose: This file returns the driver screen
 */

import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GAUGE_MAX_DEFAULT } from "../components/gauge/constants";
import Gauge from "../components/gauge/Gauge";
import {
  getMetricThreshold,
  MetricThreshold,
  VIBRATION_UNITS,
} from "../constants/metric-constants";
import { SharedScreenResources } from "../types";

/**
 * The driver screen
 */
export default ({ measurementPacket }: SharedScreenResources): JSX.Element => {
  const [metricLevel, setMetricLevel] = useState<number>(0);

  const VIBRATION_KEY: "vibration" = "vibration";
  const metricThreshold: MetricThreshold = getMetricThreshold(VIBRATION_KEY);

  /**
   *  The following constants are not used now but down the line, they can provide users functionality
   *  that allows for the modification of gauge settings
   * */
  const [lowModerateThreshold, setLowModerateThreshold] = useState<number>(
    metricThreshold.lowToMeduimThreshold
  );
  const [moderateHighThreshold, setModerateHighThreshold] = useState<number>(
    metricThreshold.mediumToHighThreshold
  );
  const [gaugeMax, setGaugeMax] = useState<number>(GAUGE_MAX_DEFAULT);
  const [guageUnits, setGuageUnits] = useState<string>(VIBRATION_UNITS);

  // When the measurement packet updates, the gauge metric updates
  useEffect(() => {
    setMetricLevel(measurementPacket.vibration);
  }, [measurementPacket]);

  return (
    <View style={styles.driverScreen}>
      <Gauge
        currentMetricLevel={metricLevel}
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
