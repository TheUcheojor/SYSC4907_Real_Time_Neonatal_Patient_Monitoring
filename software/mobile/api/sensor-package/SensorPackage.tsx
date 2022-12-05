/**
 * This class acts are the sensor package in which user can connect to.
 */

import { BleError, BleManager, Device } from "react-native-ble-plx";
import base64 from "react-native-base64";
import { PermissionsAndroid } from "react-native";

export default class SensorPackage {
  /**
   * The BLE manager that acts as an entry point to discover and communicate with BLE devices
   */

  private static readonly BLE_MANAGER: BleManager = new BleManager();

  /**
   * The amount of time to spend scanning for devices
   */
  private static readonly DEVICE_SCAN_TIMEOUT = 5000;
  /**
   * The service UUID
   */
  private static SERVICE_UUID: string = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";

  /**
   * The characteristic UUID
   */
  private static CHARACTERISTIC_UUID: string =
    "beb5483e-36e1-4688-b7f5-ea07361b26a8";

  /**
   * The sensor package device
   */
  private sensorPackageDevice: Device;

  /**
   * A flag indicating whether the sensor package device is connected
   */
  private isSensorPackageDeviceConnected: boolean;

  /**
   * The SensorPackage constructor
   */
  constructor() {}

  /**
   * Set the sensor package device
   * @param device the sensor package device
   */
  private setSensorPackageDevice(device: Device) {
    this.sensorPackageDevice = device;
  }

  /**
   * This function requests for android bluetooth permissions.
   *
   * This function is not ideal solution. The ideal solution likely involves a plugin
   * to modify platform specific files to enable/request bluetooth permissions.
   */
  public static async requestForAndroidPermissions() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN, {
      title: "Permission BLUETOOTH_SCAN ",
      message: "Requirement for Bluetooth",
      buttonNeutral: "Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }).then((answere) => {
      console.log("x: " + answere);
    });

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: "Permission BLUETOOTH_CONNECT ",
        message: "Requirement for Bluetooth",
        buttonNeutral: "Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    ).then((answere) => {
      console.log("y: " + answere);
    });
  }

  /**
   * Populate a collection with nearby BLE devices.
   * @param devices the collection of nearby BLE devices
   */
  public static async scanDevices(devices: Array<Device>) {
    SensorPackage.BLE_MANAGER.startDeviceScan(
      null,
      null,
      (error: BleError | null, scannedDevice: Device | null) => {
        if (error) {
          console.log(error);
          console.warn(error);
        }

        if (scannedDevice) {
          console.log(
            "Adding device '" +
              scannedDevice.name +
              "' to the scanned device collection"
          );

          devices.push(scannedDevice);
        }
      }
    );

    // stop scanning devices after until timeout threshold is reached
    setTimeout(() => {
      SensorPackage.BLE_MANAGER.stopDeviceScan();
    }, SensorPackage.DEVICE_SCAN_TIMEOUT);
  }

  /**
   * This function connects to the given device
   * @param device
   */
  public async connectDevice(device: Device) {
    console.log("connecting to Device:", device.name);

    device.connect().then((device) => {
      console.log("connected to " + device.name + "!");

      this.setSensorPackageDevice(device);
      this.isSensorPackageDeviceConnected = true;

      return device.discoverAllServicesAndCharacteristics();
    });
  }

  /**
   *
   */
  public getMeasurementPacketFeed() {
    this.sensorPackageDevice
      .connect()
      .then((device) => {
        console.log("connected to " + device.name + "!");

        this.setSensorPackageDevice(device);
        this.isSensorPackageDeviceConnected = true;

        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        //  Set what to do when DC is detected
        SensorPackage.BLE_MANAGER.onDeviceDisconnected(
          device.id,
          (error, device) => {
            console.log("Device " + device?.name + "has been disconnected");
            this.isSensorPackageDeviceConnected = false;
          }
        );

        //Read inital values
        // console.log("device.serviceUUIDs: ", device.serviceUUIDs);

        console.log("\n: Reading from sensor package");

        SensorPackage.BLE_MANAGER.readCharacteristicForDevice(
          device?.id,
          SensorPackage.SERVICE_UUID,
          SensorPackage.CHARACTERISTIC_UUID
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
}
