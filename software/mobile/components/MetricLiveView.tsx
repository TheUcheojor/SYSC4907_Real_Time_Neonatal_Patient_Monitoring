import { View, StyleSheet, Text, Image, Button } from "react-native";
import { VIBRATION_ICON } from "../constants/Images";
import React, { useEffect, useState } from "react";

import { VictoryLine, VictoryChart, VictoryAxis } from "victory-native";

export default function MetricLiveView({}) {
  const [liveData, setLiveData] = useState<Array<number>>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {}, [liveData]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={VIBRATION_ICON} />
      </View>
      <Text style={styles.title}>Vibration</Text>
      <Text style={styles.text}> {liveData[liveData.length - 1]} Hz</Text>

      <View style={styles.graphContainer}>
        <VictoryChart width={300} height={150}>
          <VictoryLine
            style={{
              data: { stroke: "#0E9CFF" },
            }}
            data={liveData}
          />

          <VictoryAxis
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fill: "transparent" },
              grid: { stroke: "transparent" },
            }}
          />
        </VictoryChart>
      </View>

      <Button
        title="Demo"
        onPress={() => {
          setLiveData([
            ...liveData.slice(1, liveData.length),
            getRandomInt(1, 50),
          ]);

          console.log(liveData);
        }}
      />
    </View>
  );
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "black",
    borderRadius: 20,
    position: "relative",
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "white",
    marginTop: 40,
    marginLeft: 20,
    letterSpacing: 3,
  },

  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    color: "white",
    marginTop: 20,
    marginLeft: 20,
    letterSpacing: 3,
  },
  iconContainer: {
    position: "absolute",
    top: -20,
    left: 35,
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 50 / 2,
  },

  icon: {
    width: 50,
    height: 50,
    tintColor: "white",
  },

  graphContainer: {
    position: "relative",
    left: -50,
    width: 200,
    top: -20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    padding: 0,
  },
});
