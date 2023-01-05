import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Device, Subscription } from "react-native-ble-plx";
import SensorPackageConnectionStatus from "../components/SensorPackageConnectionStatus";
import SensorPackageScanner from "../components/SensorPackageScanner";
import SensorPackageController from "../services/sensor-package/SensorPackageController";
import { MainStackParamList, SharedScreenResources } from "../types";

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

  // Create a useeffect that is trigger on selectedSensorPackage that attempts to connect to the selected sensor-package
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
      if (packetFeedSubscription !== null) packetFeedSubscription.remove();
    };
  }, [selectedSensorPackage]);

  // const sensorPackageController: SensorPackageController =
  //   SensorPackageController.getSensorPackageController();

  return (
    <View style={styles.settingsScreen}>
      <SensorPackageScanner
        setSelectedSensorPackage={setSelectedSensorPackage}
      />

      <SensorPackageConnectionStatus
        selectedSensorPackage={selectedSensorPackage}
        setSelectedSensorPackage={setSelectedSensorPackage}
      />

      {/* {devices.map((device: Device) => {
        return <Text>{device.localName}</Text>;
      })} */}
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
