/**
 * Author: Paul Okenne
 * File: Sensor Package
 * Purpose: This class acts as the sensor package in which user can connect to.
 */

import {
  BleError,
  BleManager,
  Characteristic,
  Device,
  Subscription,
} from "react-native-ble-plx";
import base64 from "react-native-base64";
import {
  request,
  PERMISSIONS,
  PermissionStatus,
} from "react-native-permissions";

import MeasurementPacket, {
  MEASUREMENT_PACKET_KEYS,
} from "./models/sensor-package-communication/MeasurementPacket";
import { formatUnixTimestamp } from "../utils/TimeUtil";
import {
  BaseRequest,
  BaseRequestInterface,
} from "./models/sensor-package-communication/BaseRequest";
import { BaseResponse } from "./models/sensor-package-communication/BaseResponse";
import { circularArrayPush } from "../utils/ArrayUtil";
import { useEffect } from "react";
import { measure } from "react-native-reanimated";
import { generateRandomMeasurementPacket } from "../utils/RandomUtil";
import demoRouteDataPoints from "../mock/demoRouteDataPoints";
import { Alert } from "react-native";
import LoggerService from "./LoggerService";
import { isValidMeasurePacket } from "../utils/ValidatorUtil";

export default class SensorPackageController {
  /**
   * The sensor package name prefix.
   *
   */
  private static readonly SENSOR_PACKAGE_NAME_PREFIX = "Sensor-Package";
  /**
   * The BLE manager that acts as an entry point to discover and communicate with BLE devices
   */

  private static readonly BLE_MANAGER: BleManager = new BleManager();

  /**
   * The amount of time to spend scanning for devices
   */
  private static readonly DEVICE_SCAN_TIMEOUT = 1000;

  /**
   * The measurement packet service UUID
   */
  private static MEASUREMENT_PACKET_SERVICE_UUID: string =
    "4fafc201-1fb5-459e-8fcc-c5c9c331914b";

  /**
   * The measurement packet characteristic UUID
   */
  private static MEASUREMENT_PACKET_CHARACTERISTIC_UUID: string =
    "beb5483e-36e1-4688-b7f5-ea07361b26a8";

  /**
   * The sensor package communication service UUID
   */
  private static SENSOR_PACKAGE_COMMUNICATION_SERVICE_UUID: string =
    "4fafc201-1fb5-459e-8fcc-c5c9c331914b";

  /**
   * The mobile application request characteristic UUID
   */
  private static APP_REQUEST_CHARACTERISTIC_UUID: string =
    "5cbb9b6c-744a-11ed-a1eb-0242ac120002";

  /**
   * The sensor package request characteristic UUID
   */
  private static SENSOR_PACKAGE_REQUEST_CHARACTERISTIC_UUID: string =
    "d91a253e-744a-11ed-a1eb-0242ac120002";

  /**
   * The sensor package device
   */
  private sensorPackageDevice: Device | null = null;

  /**
   * A flag indicating whether the sensor package device is connected
   */
  private isSensorPackageDeviceConnected: boolean = false;

  private static sensorPackageController: SensorPackageController =
    new SensorPackageController();

  /**
   * The SensorPackage constructor
   */
  private constructor() {}

  /**
   * Returns the sensor package controller
   * @returns the sensor package controller
   */
  public static getSensorPackageController(): SensorPackageController {
    return this.sensorPackageController;
  }

  /**
   * Set the sensor package device
   * @param device the sensor package device
   */
  private setSensorPackageDevice(device: Device) {
    this.sensorPackageDevice = device;
  }

  /**
   * This function requests for bluetooth permissions.
   *
   */
  public static async requestForPermissions() {
    await request(PERMISSIONS.ANDROID.BLUETOOTH_SCAN, {
      title: "Bluetooth Scanning Permission ",
      message: "Required to scan for the sensor package",
      buttonNeutral: "Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }).then((result: PermissionStatus) => {
      console.log("PERMISSIONS.BLUETOOTH_SCAN -> userResponse: " + result);
    });

    await request(PERMISSIONS.ANDROID.BLUETOOTH_CONNECT, {
      title: "Bluetooth Connection Permission ",
      message: "Required to connect to the sensor package",
      buttonNeutral: "Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }).then((result: PermissionStatus) => {
      console.log("PERMISSIONS.BLUETOOTH_CONNECT -> result: " + result);
    });

    await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
      title: "Scanning Permissions",
      message: "Required to connect to the sensor package",
      buttonNeutral: "Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }).then((result: PermissionStatus) => {
      console.log("PERMISSIONS.ACCESS_COARSE_LOCATION -> result: " + result);
    });

    await request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, {
      title: "Scanning Permissions",
      message: "Required to connect to the sensor package",
      buttonNeutral: "Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }).then((result: PermissionStatus) => {
      console.log("PERMISSIONS.ACCESS_COARSE_LOCATION -> result: " + result);
    });

    await request(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL, {
      title: "Bluetooth Peripheral ",
      message: "Required to connect to the sensor package",
      buttonNeutral: "Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    }).then((result: PermissionStatus) => {
      console.log("IOS BLUETOOTH_PERIPHERAL permission: ", result);
    });
  }

  /**
   * Populate a collection with nearby BLE devices.
   * @param setDevices the collection of nearby BLE devices
   */
  public static scanDevices(
    setDevices: React.Dispatch<React.SetStateAction<Device[]>>
  ) {
    const fetchedDevices: Device[] = [];
    SensorPackageController.BLE_MANAGER.startDeviceScan(
      null,
      null,
      (error: BleError | null, scannedDevice: Device | null) => {
        if (error) {
          console.log(error);
          console.warn(error);
        }

        if (
          scannedDevice &&
          scannedDevice.localName?.includes(
            SensorPackageController.SENSOR_PACKAGE_NAME_PREFIX
          ) &&
          fetchedDevices.every(
            (device: Device) => device.localName !== scannedDevice.localName
          )
        ) {
          console.log(
            "Adding device '" +
              scannedDevice.name +
              "' to the scanned device collection"
          );
          fetchedDevices.push(scannedDevice);
        }
      }
    );

    // stop scanning devices after until timeout threshold is reached
    setTimeout(() => {
      SensorPackageController.BLE_MANAGER.stopDeviceScan();
      setDevices(fetchedDevices);
    }, SensorPackageController.DEVICE_SCAN_TIMEOUT);
  }

  /**
   * This function connects to the given device
   * @param device
   */
  public async connectDevice(
    device: Device | null,
    setSelectedSensorPackage: React.Dispatch<
      React.SetStateAction<Device | null>
    >
  ): Promise<void> {
    if (!device || device.id == this.sensorPackageDevice?.id) return;

    console.log("connecting to Device:", device.name);

    return device
      .connect()
      .then((device) => {
        console.log("connected to " + device.name + "!");
        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        this.setSensorPackageDevice(device);
        this.isSensorPackageDeviceConnected = true; //Should be removed

        //Set the disconnection behaviour
        SensorPackageController.BLE_MANAGER.onDeviceDisconnected(
          device.id,
          (error, device) => {
            console.log(
              "Device " + device?.localName + "has been disconnected"
            );
            this.isSensorPackageDeviceConnected = false; //Should be removed
            this.sensorPackageDevice = null;
            setSelectedSensorPackage(null);
          }
        );
      })
      .catch((error: any) => {
        Alert.alert(
          "Sensor Package Communication",
          "Cannot connect to the sensor package"
        );
        LoggerService.warn("Sensor Package Communication Error: " + error);
      });
  }

  /**
   * Disconnected the current device
   * @returns
   */
  public async disconnectDevice(): Promise<void> {
    if (!this.sensorPackageDevice) return;

    return this.sensorPackageDevice
      .cancelConnection()
      .then((device: Device) => {
        this.sensorPackageDevice = null;
        this.isSensorPackageDeviceConnected = false;

        if (!this.sensorPackageDevice) return;

        // Alert.alert("Disconnection", "Sensor Package has been disconnected");
      })
      .catch((error: any) => {
        Alert.alert(
          "Sensor Package Communication",
          "An error occurred when attempting disconnecting from the sensor package"
        );
        LoggerService.warn("Sensor Package Communication Error: " + error);
      });
  }

  /**
   * Update the given measurement-feed with the latest packets
   * @param measurementFeed the measurement-feed
   *  @param feedSetterFuctionParams the use-state setter functions to update the feed

   */
  public getMeasurementPacketFeed(
    setMeasurementPacket: React.Dispatch<
      React.SetStateAction<MeasurementPacket>
    >
  ): Subscription | null {
    if (
      this.sensorPackageDevice == null ||
      !this.isSensorPackageDeviceConnected
    ) {
      return null;
    }

    console.log("attempting to subscribe to measurement feed: ");
    // Watch the measurement packet characteristic and update the measurement-feed collection accordingly
    // The characteristic is expected to be notifable to enable monitoring.
    return this.sensorPackageDevice.monitorCharacteristicForService(
      SensorPackageController.MEASUREMENT_PACKET_SERVICE_UUID,
      SensorPackageController.MEASUREMENT_PACKET_CHARACTERISTIC_UUID,
      (error, characteristic) => {
        if (!characteristic || error || !characteristic.value) return;

        characteristic
          .read()
          .then((characteristic: Characteristic) => {
            if (!characteristic || error || !characteristic.value) return null;

            LoggerService.debug(
              "Sensor package sent the following: ",
              base64.decode(characteristic.value as string)
            );

            let measurementPacket: MeasurementPacket = JSON.parse(
              base64.decode(characteristic.value as string)
            );

            /**
             * Validate the measurement-packet keys. Do not update the measurement packet to app if invalid.
             *
             * The reason I think we receive invalid packet sometimes is that the json parsing gets
             * interrupted, corrupting the data
             */
            if (!isValidMeasurePacket(measurementPacket)) {
              return null;
            }

            //Covert the unix time stamp
            measurementPacket.time = formatUnixTimestamp(
              parseInt(measurementPacket.time as string)
            );

            //Update the measurement packet
            //This means that the measurementPacket is pushed to the app
            setMeasurementPacket(measurementPacket);

            console.log(
              "Received new measurementpacket (getMeasurementPacketFeed): ",
              measurementPacket
            );
          })
          .catch((error: any) => {
            LoggerService.warn(
              "Sensor Package Error (getMeasurementPacketFeed): " + error
            );
          });
      }
    );
  }

  /**
   * Mocks the measurement Packet feed from the sensor package
   * @param setMeasurementPacket sets the measurement packet
   */
  public mockMeasurementPacketFeed(
    setMeasurementPacket: React.Dispatch<
      React.SetStateAction<MeasurementPacket>
    >
  ): NodeJS.Timer {
    const MEASUREMENT_PACKET_GENERATION_RATE_MILLISECONDS = 1000;
    let currentLocationIndex: number = 0;

    return setInterval(() => {
      const generatedMeasurementPacket = generateRandomMeasurementPacket(
        demoRouteDataPoints[currentLocationIndex].location
      );
      // console.log(
      //   "currentLocationIndex: ",
      //   demoRouteDataPoints[currentLocationIndex].location
      // );
      currentLocationIndex =
        (currentLocationIndex + 1) % demoRouteDataPoints.length;

      setMeasurementPacket(generatedMeasurementPacket);
    }, MEASUREMENT_PACKET_GENERATION_RATE_MILLISECONDS);
  }

  /**
   * Sends the given request
   * @param request the request
   */
  public sendRequest(request: BaseRequest): Promise<BaseResponse> {
    if (
      this.sensorPackageDevice == null ||
      !this.isSensorPackageDeviceConnected
    )
      return new Promise(() => null);

    //Send the given request
    return this.sensorPackageDevice
      .writeCharacteristicWithResponseForService(
        SensorPackageController.SENSOR_PACKAGE_COMMUNICATION_SERVICE_UUID,
        SensorPackageController.APP_REQUEST_CHARACTERISTIC_UUID,
        base64.encode(JSON.stringify(request.generateObject())) //The base64 encode message
      )
      .then((characteristic: Characteristic | null) => {
        //Check that the operation has been successful
        if (!characteristic || !characteristic.value) {
          return {
            operationSuccess: false,
            message: "Null Characteristic! ",
          } as BaseResponse;
        }

        let response: BaseResponse = JSON.parse(characteristic.value);
        console.log("recevied response: ", response);
        return response;
      });
  }

  /**
   * Update the given request queue with the latest sensor package requests
   * @param sensorPackageRequestQueue the request queue
   */
  public async receiveRequest(sensorPackageRequestQueue: Array<BaseRequest>) {
    if (
      this.sensorPackageDevice == null ||
      !this.isSensorPackageDeviceConnected
    )
      return;

    // Watch the measurement packet characteristic and update the sensorPackageRequestQueue accordingly
    // The characteristic is expected to be notifable to enable monitoring.
    this.sensorPackageDevice.monitorCharacteristicForService(
      SensorPackageController.SENSOR_PACKAGE_COMMUNICATION_SERVICE_UUID,
      SensorPackageController.SENSOR_PACKAGE_REQUEST_CHARACTERISTIC_UUID,
      (error, characteristic) => {
        if (error || !characteristic?.value) return;

        let sensorPackageRequest: BaseRequest = JSON.parse(
          characteristic.value
        );

        sensorPackageRequestQueue.push(sensorPackageRequest);

        console.log(
          "Received new sensorPackageRequest: ",
          sensorPackageRequest
        );
      }
    );
  }
}
