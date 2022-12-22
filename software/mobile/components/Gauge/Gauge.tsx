/**
 * Author: Paul Okenne
 * File: Gauge
 * Purpose: This file exports the Guage component
 *
 * Notes: Please note that victory native does have a native gauge component.
 * As a result, a gauge component had to be created, consisting of two pie charts due to coloring limitations.
 * The bottom layer pie chart displays the increments and the top layer pie chart displays the current value.
 */

import { View, StyleSheet, Text, Button } from "react-native";
import React, { useState } from "react";
import { VictoryPie, VictoryLabel } from "victory-native";

import {
  GAUGE_MAX,
  GAUGE_HEIGHT,
  GAUGE_WIDTH,
  INNER_RADIUS,
  ANIMATION_DURATION_MILLISECONDS,
  GAUGE_START_ANGLE,
} from "./constants";
import {
  generateGaugeIncrements,
  getRandomInt,
  updateGaugeColor,
  updateIcon,
} from "./util";

export default () => {
  const [vibrationLevel, setVibrationLevel] = useState<number>(50);
  const data = [GAUGE_MAX - vibrationLevel, vibrationLevel];
  const increment_data = generateGaugeIncrements();

  return (
    <View style={styles.container}>
      <Button
        title="DEMO"
        onPress={() => {
          setVibrationLevel(getRandomInt(0, 180));
        }}
      />

      <VictoryPie
        colorScale={["white"]}
        height={GAUGE_HEIGHT}
        width={GAUGE_WIDTH}
        data={increment_data}
        innerRadius={INNER_RADIUS}
        startAngle={GAUGE_START_ANGLE}
        endAngle={-GAUGE_START_ANGLE}
        labelComponent={
          <VictoryLabel
            textAnchor="middle"
            dx={2}
            dy={10}
            verticalAnchor="middle"
          />
        }
        style={{
          labels: {
            fontFamily: "Montserrat_700Bold",
            fill: "#969696",
            fontSize: 20,
            padding: 30,
          },

          data: {},
        }}
      />

      <VictoryPie
        height={GAUGE_HEIGHT}
        width={GAUGE_WIDTH}
        innerRadius={INNER_RADIUS}
        animate={{ duration: ANIMATION_DURATION_MILLISECONDS }}
        colorScale={["white", updateGaugeColor(vibrationLevel)]}
        data={data}
        startAngle={GAUGE_START_ANGLE}
        endAngle={-GAUGE_START_ANGLE}
        style={{
          labels: {
            opacity: 0,
          },
          data: {},
          parent: {
            position: "absolute",
            top: -GAUGE_HEIGHT,
          },
        }}
      />

      <Text style={styles.title}>{vibrationLevel}</Text>
      <Text style={styles.units}>Hz</Text>
      {updateIcon(vibrationLevel)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 350,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 64,
    color: "black",
    position: "absolute",
    top: "50%",
    alignSelf: "center",
  },

  units: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    color: "#969696",
    position: "absolute",
    top: "70%",
    alignSelf: "center",
  },

  increment: {
    position: "absolute",
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    color: "#969696",

    top: "85%",
    left: 0,
  },
});
