/**
 * Author: Paul
 * File: SensorPackageScanner
 * Purpose: Exports a components that scans and shows nearby sensor packages
 */
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Device } from "react-native-ble-plx";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import SensorPackageController from "../services/sensor-package/SensorPackageController";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import { ScrollView } from "react-native-gesture-handler";

interface SensorPackageScannerParams {
  setSelectedSensorPackage: React.Dispatch<React.SetStateAction<Device | null>>;
}

const ICON_PRESSED_COLOUR: string = "#282828";
const SENSOR_PACKAGE_ITEM_PRESSED_COLOUR: string = "black";

export default ({ setSelectedSensorPackage }: SensorPackageScannerParams) => {
  const [devices, setDevices] = useState<Array<Device>>([]);

  useEffect(() => {
    SensorPackageController.scanDevices(setDevices);

    return () => setDevices([]);
  }, []);

  return (
    <View style={styles.sensorPackageScanner}>
      <View style={styles.header}>
        <Text style={styles.title}>Nearby Sensor Packages</Text>

        <Pressable
          onPress={() => SensorPackageController.scanDevices(setDevices)}
          style={({ pressed }: { pressed: boolean }) =>
            getPressedHighlightBehaviourStyle(
              pressed,
              styles.icon,
              ICON_PRESSED_COLOUR
            )
          }
        >
          <FontAwesome name="refresh" size={20} />
        </Pressable>
      </View>

      <ScrollView style={styles.sensorPackagesContainer}>
        {devices.map((device: Device, index: number) => {
          return (
            <Pressable
              key={index}
              onPress={() => setSelectedSensorPackage(device)}
              style={({ pressed }: { pressed: boolean }) =>
                getPressedHighlightBehaviourStyle(
                  pressed,
                  styles.sensorPackageItem,
                  SENSOR_PACKAGE_ITEM_PRESSED_COLOUR
                )
              }
            >
              <Ionicons name="hardware-chip-outline" size={24} color="white" />
              <Text style={styles.sensorPackageItemTitle}>
                {device.localName}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sensorPackageScanner: {
    flex: 3,
    width: "90%",
    flexDirection: "column",
    backgroundColor: "black",
    // height: 300,
    marginVertical: 10,
    borderRadius: 15,
  },

  header: {
    // height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    padding: 20,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    color: "white",
    fontSize: 16,
  },

  icon: {
    color: "black",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
  },

  sensorPackagesContainer: {
    flex: 1,
    backgroundColor: "#282828",
    margin: 20,
    marginTop: 0,
    // paddingVertical: 10,
    // paddingTop: 10,
    borderRadius: 10,
  },

  sensorPackageItem: {
    flexDirection: "row",
    paddingVertical: 20,
    // backgroundColor: "blue",
    justifyContent: "space-around",
    alignContent: "center",
  },

  sensorPackageItemTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    textAlign: "center",
    color: "white",
  },
});
// {

//     temp: 21.
//     noise: 20.11
//     location: {
//         latitude: 20,
//         longitude: 20
//     }
// }
/***
 *
 *
 * Serial.println(X)
 *
 */
