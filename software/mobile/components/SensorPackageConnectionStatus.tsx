/**
 * Author: Paul Okenne
 * File: SensorPackageConnectionStatus
 * Purpose: Exports the sensor-package connection status component
 */
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome, Feather, EvilIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Device } from "react-native-ble-plx";
import SensorPackageController from "../services/sensor-package/SensorPackageController";

const DISCONNECTION_INDICATION_COLOUR: string = "#C2372E";
const CONNECTION_INDICATION_COLOUR: string = "#2DB021";
const DISCONNECTION_ON_PRESS_BUTTTON_COLOUR: string = "#282828";
const CONNECTED_LABEL: string = "CONNECTED";
const DISCONNECTED_LABEL: string = "NOT CONNECTED";
const SENSOR_PACKAGE_LABEL: string = "Sensor Package";

interface SensorPackageConnectionStatusParams {
  selectedSensorPackage: Device | null;
  setSelectedSensorPackage: React.Dispatch<React.SetStateAction<Device | null>>;
}

export default ({
  selectedSensorPackage,
  setSelectedSensorPackage,
}: SensorPackageConnectionStatusParams) => {
  const isDeviceConnected = () => selectedSensorPackage !== null;

  /**
   * Disonnection th given device
   */
  const disconnectDevice = () => {
    SensorPackageController.getSensorPackageController()
      .disconnectDevice()
      .then(() => {
        setSelectedSensorPackage(null);
      });
  };
  return (
    <View style={styles.sensorPackageConnectionStatus}>
      <View style={styles.statusIconContainer}>
        <FontAwesome
          name="circle"
          size={20}
          color={
            isDeviceConnected()
              ? CONNECTION_INDICATION_COLOUR
              : DISCONNECTION_INDICATION_COLOUR
          }
        />

        {isDeviceConnected() && (
          <Pressable onPress={disconnectDevice}>
            {({ pressed }) => {
              if (pressed) {
                return (
                  <EvilIcons
                    name="close-o"
                    size={40}
                    color={DISCONNECTION_ON_PRESS_BUTTTON_COLOUR}
                  />
                );
              }

              return (
                <EvilIcons
                  name="close-o"
                  size={40}
                  color={DISCONNECTION_INDICATION_COLOUR}
                />
              );
            }}
          </Pressable>
        )}
      </View>
      <View style={styles.bluetoothIconContainer}>
        <Feather name="bluetooth" size={30} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.secondaryText}>
          {isDeviceConnected()
            ? selectedSensorPackage?.localName
            : SENSOR_PACKAGE_LABEL}
        </Text>
        <Text
          style={{
            ...styles.primaryText,
            color: isDeviceConnected()
              ? CONNECTION_INDICATION_COLOUR
              : DISCONNECTION_INDICATION_COLOUR,
          }}
        >
          {isDeviceConnected() ? CONNECTED_LABEL : DISCONNECTED_LABEL}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sensorPackageConnectionStatus: {
    // flex: 1,
    margin: 10,
    height: 200,
    width: "90%",
    padding: 10,
    backgroundColor: "black",
    borderRadius: 15,
    paddingBottom: 20,
  },

  primaryText: {
    fontFamily: "Montserrat_700Bold",
    color: "white",
    fontSize: 18,
  },

  secondaryText: {
    fontFamily: "Montserrat_600SemiBold",
    color: "white",
    fontSize: 14,
  },

  statusIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bluetoothIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },

  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  //   disconnectIcon: {
  //     backgroundColor: "red",
  //     borderRadius: 40,
  //   },
});
