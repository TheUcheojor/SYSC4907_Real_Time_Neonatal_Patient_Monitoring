import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native";
import React, { useEffect, useState, ReactSVG } from "react";
import { VictoryPie } from "victory-native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const MODERATE_GUAGE_COLOR = "#FFF500";
const ANGRY_GUAGE_COLOR = "#FF5C5C";
const HAPPY_GUAGE_COLOR = "#2DB021";

const LOW_TO_MODERATE_THRESHOLD = 60;
const MODERATE_TO_HIGH_THRESHOLD = 130;
const GAUGE_MAX = 180;

export default () => {
  const [vibrationLevel, setVibrationLevel] = useState<number>(50);

  const data = [GAUGE_MAX - vibrationLevel, vibrationLevel];

  const increment_data = [
    { y: 5, x: "120" },
    { y: 5, x: "110" },
    { y: 5, x: "100" },
    { y: 5, x: "80" },
    { y: 5, x: "60" },
    { y: 5, x: "40" },
    { y: 5, x: "20" },
  ];

  //   const increment_data = [
  //     { x: 1, y: 2, label: "one" },
  //     { x: 2, y: 3, label: "two" },
  //     { x: 3, y: 5, label: "three" },
  //   ];

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
        data={increment_data}
        innerRadius={150}
        startAngle={135}
        endAngle={-135}
        style={{
          labels: {
            // fontFamily: "Montserrat_700Bold",
            fontSize: 15,
            color: "red",
            fontWeight: 300,
            opacity: 1,
            marginBlock: 15,
          },

          data: {
            stroke: "black",
            fillOpacity: 0.9,
            strokeWidth: 0.4,
          },
        }}
      />

      <VictoryPie
        colorScale={["white", updateGaugeColor(vibrationLevel)]}
        data={data}
        innerRadius={150}
        startAngle={135}
        endAngle={-135}
        style={{
          labels: {
            opacity: 0,
          },

          data: {
            stroke: "black",
            fillOpacity: 0.9,
            strokeWidth: 0.4,
          },

          parent: { position: "absolute", top: -428 },
        }}
      />

      <Text style={styles.title}>{vibrationLevel}</Text>
      <Text style={styles.units}>Hz</Text>
      {updateIcon(vibrationLevel)}
    </View>
  );
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Update the guage color based on the vibration level
 * @param vibrationLevel the vibration level
 * @returns the color string
 */
const updateGaugeColor = (vibrationLevel: number): string => {
  if (vibrationLevel < LOW_TO_MODERATE_THRESHOLD) {
    return HAPPY_GUAGE_COLOR;
  } else if (
    vibrationLevel > LOW_TO_MODERATE_THRESHOLD &&
    vibrationLevel < MODERATE_TO_HIGH_THRESHOLD
  ) {
    return MODERATE_GUAGE_COLOR;
  } else {
    return ANGRY_GUAGE_COLOR;
  }
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

  icon: {
    position: "absolute",
    alignSelf: "center",
    top: "85%",
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

const HAPPY_ICON: JSX.Element = (
  <MaterialCommunityIcons
    name="emoticon-happy-outline"
    size={80}
    color="#969696"
    style={styles.icon}
  />
);

const MODERATE_ICON: JSX.Element = (
  <MaterialIcons
    name="sentiment-dissatisfied"
    size={80}
    color="#969696"
    style={styles.icon}
  />
);

const ANGRY_ICON: JSX.Element = (
  <FontAwesome5 name="angry" size={80} color="#969696" style={styles.icon} />
);

/**
 * Update the face icon based on the vibration level
 * @param vibrationLevel the vibration level
 * @returns the icon
 */
const updateIcon = (vibrationLevel: number): JSX.Element => {
  if (vibrationLevel < LOW_TO_MODERATE_THRESHOLD) {
    return HAPPY_ICON;
  } else if (
    vibrationLevel > LOW_TO_MODERATE_THRESHOLD &&
    vibrationLevel < MODERATE_TO_HIGH_THRESHOLD
  ) {
    return MODERATE_ICON;
  } else {
    return ANGRY_ICON;
  }
};
