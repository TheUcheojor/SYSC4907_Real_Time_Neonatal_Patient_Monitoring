/**
 * File: SettingsScreen
 * Author: Paul Okenne
 * Purpose: Returns the settig screen component
 */
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Device, Subscription } from "react-native-ble-plx";
import SensorPackageConnectionStatus from "../components/SensorPackageConnectionStatus";
import SensorPackageScanner from "../components/SensorPackageScanner";
import SensorPackageController from "../services/SensorPackageController";
import { SharedScreenResources } from "../types";

/**
 * The setttings screen
 */
export default ({
  recordingState,
  measurementPacket,
  setMeasurementPacket,
}: SharedScreenResources): JSX.Element => {
  const [selectedSensorPackage, setSelectedSensorPackage] =
    useState<Device | null>(null);

  /**
   *  When a user selects a sensor-package item, attempt to connect to the sensor-package
   * */
  useEffect(() => {
    if (!selectedSensorPackage) return;

    const sensorPackageController: SensorPackageController =
      SensorPackageController.getSensorPackageController();

    let packetFeedSubscription: Subscription | null;
    // console.log("attempting to subscribe to measurement feed:");

    sensorPackageController
      .connectDevice(selectedSensorPackage, setSelectedSensorPackage)
      .then(() => {
        packetFeedSubscription =
          sensorPackageController.getMeasurementPacketFeed(
            setMeasurementPacket
          );
      });

    return () => {
      if (packetFeedSubscription) packetFeedSubscription.remove();
    };
  }, [selectedSensorPackage]);

  return (
    <View style={styles.settingsScreen}>
      <SensorPackageConnectionStatus
        selectedSensorPackage={selectedSensorPackage}
        setSelectedSensorPackage={setSelectedSensorPackage}
      />
      <SensorPackageScanner
        setSelectedSensorPackage={setSelectedSensorPackage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsScreen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
});
