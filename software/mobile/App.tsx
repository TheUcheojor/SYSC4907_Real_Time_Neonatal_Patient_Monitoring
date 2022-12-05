// import { StatusBar } from "expo-status-bar";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { RootNavigation } from "./routes";
// import { View, Text } from "react-native";
// import {
//   useFonts,
//   Montserrat_600SemiBold_Italic,
//   Montserrat_600SemiBold,
//   Montserrat_700Bold,
//   Montserrat_400Regular,
// } from "@expo-google-fonts/montserrat";

// import { BleError, BleManager, Device } from "react-native-ble-plx";
// import { useEffect, useState } from "react";
//import { LogBox } from "react-native";

//LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
//LogBox.ignoreAllLogs(); //Ignore all log notifications

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     Montserrat_600SemiBold_Italic,
//     Montserrat_600SemiBold,
//     Montserrat_700Bold,
//     Montserrat_400Regular,
//   });

//   const bleManager: BleManager = new BleManager();

//   const [devices, setDevices] = useState<Array<string>>([]);

//   const scanAndConnect = () => {
//     console.log("scanAndConnect");
//     bleManager.startDeviceScan(
//       null,
//       null,
//       (error: BleError | null, device: Device | null) => {
//         if (error) {
//           // Handle error (scanning will be stopped automatically)
//           return;
//         }

//         console.log("Found", device?.name, device?.localName);
//         setDevices([...devices, String(device?.name)]);

//         // Check if it is a device you are looking for based on advertisement data
//         // or other criteria.
//         // if (device.name === 'TI BLE Sensor Tag' ||
//         //     device.name === 'SensorTag') {

//         //     // Stop scanning as it's not necessary if you are scanning for one device.
//         //     manager.stopDeviceScan();

//         //     // Proceed with connection.
//         // }
//       }
//     );
//   };

//   useEffect(() => {
//     console.log("Setting up initial manager subscription");
//     bleManager.onStateChange((state) => {
//       console.log("State: " + state);
//       const subscription = bleManager.onStateChange((state) => {
//         if (state === "PoweredOn") {
//           console.log("PoweredOn");
//           scanAndConnect();
//           subscription.remove();
//         }
//       }, true);
//       return () => subscription.remove();
//     });
//   }, [bleManager]);

//   return <Text> Testing: {devices}</Text>;
//   // return fontsLoaded ? (
//   //   <SafeAreaProvider>
//   //     <RootNavigation />
//   //     <StatusBar />
//   //   </SafeAreaProvider>
//   // ) : (
//   //   <View></View>
//   // );
// }

// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Button,
//   ImageBackground,
//   Image,
//   Platform,
//   PermissionsAndroid,
// } from "react-native";
// import { BleManager } from "react-native-ble-plx";

// const Home = () => {
//   // const manager = useRef();
//   const manager = new BleManager({
//     // restoreStateIdentifier: "com.baucapstone.smartdoorlock",
//     // restoreStateFunction: () => {},
//     // allowDuplicate: false,
//   });

//   var devices: any[] = [];

//   const [isLoading, setIsLoading] = useState(false);

//   const scanDevices = () => {
//     setIsLoading(true);

//     manager.startDeviceScan(null, null, (error: any, scannedDevice: any) => {
//       console.log("startDeviceScan");

//       if (error) {
//         console.warn(error);
//       }
//       console.log(scannedDevice);
//       if (
//         scannedDevice &&
//         !devices.find((dev) => dev.id === scannedDevice.id)
//       ) {
//         console.log(scannedDevice);
//         manager.stopDeviceScan();

//         devices = [
//           ...devices,
//           { id: scannedDevice.id, name: scannedDevice.name },
//         ];
//       }
//     });

//     // setTimeout(() => {
//     //   manager.stopDeviceScan();
//     //   console.log("scanning stopped");
//     //   setIsLoading(false);
//     // }, 0);
//   };

//   useEffect(() => {
//     // if (Platform.OS === "android" && Platform.Version >= 23) {
//     //   // Scanning: Checking permissions...
//     //   const enabled = yield call(
//     //     PermissionsAndroid.check,
//     //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     //   );
//     //   if (!enabled) {
//     //     // Scanning: Permissions disabled, showing...
//     //     const granted = yield call(
//     //       PermissionsAndroid.request,
//     //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     //     );
//     //     if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//     //       // Scanning: Permissions not granted, aborting...
//     //       return;
//     //     }
//     //   }
//     // }

//     scanDevices();
//   }, []);

//   return <Text> devices: {devices} </Text>;
// };

// export default Home;

import React, { useState } from "react";
import {
  TouchableOpacity,
  Button,
  PermissionsAndroid,
  View,
  Text,
} from "react-native";

import { BleManager, Device } from "react-native-ble-plx";
import base64 from "react-native-base64";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const BLTManager = new BleManager();

const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";

const MESSAGE_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";
const BOX_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

function StringToBool(input: String) {
  if (input == "1") {
    return true;
  } else {
    return false;
  }
}

function BoolToString(input: boolean) {
  if (input == true) {
    return "1";
  } else {
    return "0";
  }
}

export default function App() {
  //Is a device connected?
  const [isConnected, setIsConnected] = useState(false);

  //What device is connected?
  const [connectedDevice, setConnectedDevice] = useState<Device>();

  const [message, setMessage] = useState("Nothing Yet");

  const [boxvalue, setBoxValue] = useState(false);

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN, {
    title: "Permission BLUETOOTH_SCAN ",
    message: "Requirement for Bluetooth",
    buttonNeutral: "Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK",
  }).then((answere) => {
    console.log("x: " + answere);
  });

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT, {
    title: "Permission BLUETOOTH_CONNECT ",
    message: "Requirement for Bluetooth",
    buttonNeutral: "Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK",
  }).then((answere) => {
    console.log("y: " + answere);
  });

  // PermissionsAndroid.request(
  //   PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
  //   {
  //     title: "Permission ACCESS_BACKGROUND_LOCATION Bluetooth",
  //     message: "Requirement for Bluetooth",
  //     buttonNeutral: "Later",
  //     buttonNegative: "Cancel",
  //     buttonPositive: "OK",
  //   }
  // ).then((answere) => {
  //   console.log("6: " + answere);
  // });
  // Scans availbale BLT Devices and then call connectDevice
  async function scanDevices() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Permission Localisation Bluetooth",
        message: "Requirement for Bluetooth",
        buttonNeutral: "Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    ).then((answere) => {
      console.log("scanning");

      console.log(answere);

      // display the Activityindicator

      BLTManager.startDeviceScan(null, null, (error, scannedDevice) => {
        if (error) {
          console.log(error);

          console.warn(error);
        }
        console.log(
          scannedDevice?.name,
          scannedDevice && scannedDevice.name == "ES32P-Sensor-Package"
        );
        if (scannedDevice && scannedDevice.name == "ESP32-Sensor-Package") {
          BLTManager.stopDeviceScan();
          connectDevice(scannedDevice);
        }
      });

      // stop scanning devices after 5 seconds
      setTimeout(() => {
        BLTManager.stopDeviceScan();
      }, 6000);
    });
  }

  // handle the device disconnection (poorly)
  async function disconnectDevice() {
    console.log("Disconnecting start");

    if (connectedDevice != null) {
      const isDeviceConnected = await connectedDevice.isConnected();
      if (isDeviceConnected) {
        BLTManager.cancelTransaction("messagetransaction");
        BLTManager.cancelTransaction("nightmodetransaction");

        BLTManager.cancelDeviceConnection(connectedDevice.id).then(() =>
          console.log("DC completed")
        );
      }

      const connectionStatus = await connectedDevice.isConnected();
      if (!connectionStatus) {
        setIsConnected(false);
      }
    }
  }

  //Function to send data to ESP32
  // async function sendBoxValue(value: boolean) {
  //   BLTManager.writeCharacteristicWithResponseForDevice(
  //     connectedDevice?.id,
  //     SERVICE_UUID,
  //     BOX_UUID,
  //     base64.encode(value.toString())
  //   ).then((characteristic) => {
  //     console.log("Boxvalue changed to :", base64.decode(characteristic.value));
  //   });
  // }
  //Connect the device and start monitoring characteristics
  async function connectDevice(device: Device) {
    console.log("connecting to Device:", device.name);

    device
      .connect()
      .then((device) => {
        setConnectedDevice(device);
        setIsConnected(true);
        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        console.log("connexted to " + device.name + "!");
        //  Set what to do when DC is detected
        BLTManager.onDeviceDisconnected(device.id, (error, device) => {
          console.log("Device DC");
          setIsConnected(false);
        });

        //Read inital values
        // console.log("device.serviceUUIDs: ", device.serviceUUIDs);

        console.log("\n: Reading from sensor package");

        BLTManager.readCharacteristicForDevice(
          device?.id,
          SERVICE_UUID,
          BOX_UUID
        )
          .then((characteristic) => {
            console.log(
              "READ Value: Boxvalue changed to :",
              base64.decode(characteristic.value as string)
            );
          })
          .then(() => {
            console.log("WRITE: Sending 'Hello shyam!!!!!'");
            BLTManager.writeCharacteristicWithResponseForDevice(
              device?.id,
              SERVICE_UUID,
              BOX_UUID,
              base64.encode("Hello shyam!!!!!")
            ).then((characteristic) => {
              console.log(
                "AFTER WRITE: Boxvalue changed to :",
                base64.decode(characteristic.value as string)
              );
            });
          });

        //Message
        // device
        //   .readCharacteristicForService(SERVICE_UUID, MESSAGE_UUID)
        //   .then((valenc) => {
        //     // setMessage(base64.decode(valenc?.value));
        //     setMessage(valenc?.value as string);
        //     console.log("Message: ", valenc?.value as string);
        //   });

        // //BoxValue
        // device
        //   .readCharacteristicForService(SERVICE_UUID, BOX_UUID)
        //   .then((valenc) => {
        //     setBoxValue(StringToBool(base64.decode(valenc?.value)));
        //   });

        //monitor values and tell what to do when receiving an update

        //Message
        // device.monitorCharacteristicForService(
        //   SERVICE_UUID,
        //   MESSAGE_UUID,
        //   (error, characteristic) => {
        //     if (characteristic?.value != null) {
        //       setMessage(base64.decode(characteristic?.value));
        //       console.log(
        //         "Message update received: ",
        //         base64.decode(characteristic?.value)
        //       );
        //     }
        //   },
        //   "messagetransaction"
        // );

        // //BoxValue
        // device.monitorCharacteristicForService(
        //   SERVICE_UUID,
        //   BOX_UUID,
        //   (error, characteristic) => {
        //     if (characteristic?.value != null) {
        //       // setBoxValue(StringToBool(base64.decode(characteristic?.value)));
        //       console.log(
        //         "Box Value update received: ",
        //         characteristic?.value as string
        //       );
        //     }
        //   },
        //   "boxtransaction"
        // );

        console.log("Connection established");
      });
  }

  return (
    <View>
      <View style={{ paddingBottom: 200 }}></View>

      {/* Title */}
      <View style={{}}>
        <Text style={{}}>BLE Example</Text>
      </View>

      <View style={{ paddingBottom: 20 }}></View>

      {/* Connect Button */}
      <View style={{}}>
        <TouchableOpacity style={{ width: 120 }}>
          {!isConnected ? (
            <Button
              title="Connect"
              onPress={() => {
                scanDevices();
              }}
              disabled={false}
            />
          ) : (
            <Button
              title="Disonnect"
              onPress={() => {
                disconnectDevice();
              }}
              disabled={false}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={{ paddingBottom: 20 }}></View>

      {/* Monitored Value */}

      <View style={{}}>
        <Text style={{}}>{message}</Text>
      </View>

      <View style={{ paddingBottom: 20 }}></View>
    </View>
  );
}
