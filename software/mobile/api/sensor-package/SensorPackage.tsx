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
} from "react-native-ble-plx";
import base64 from "react-native-base64";
import { PermissionsAndroid } from "react-native";
import MeasurementPacket from "./models/MeasurementPacket";
import { convertUnixTimestampToUTCTime } from "./util";
import {
  BaseRequest,
  BaseRequestInterface,
} from "./models/requests/BaseRequest";
import { BaseResponse } from "./models/requests/BaseResponse";

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
    }).then((userResponse) => {
      console.log(
        "PERMISSIONS.BLUETOOTH_SCAN -> userResponse: " + userResponse
      );
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
    ).then((userResponse) => {
      console.log(
        "PERMISSIONS.BLUETOOTH_CONNECT -> userResponse: " + userResponse
      );
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

    device
      .connect()
      .then((device) => {
        console.log("connected to " + device.name + "!");
        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {
        this.setSensorPackageDevice(device);
        this.isSensorPackageDeviceConnected = true;

        //Set the disconnection behaviour
        SensorPackage.BLE_MANAGER.onDeviceDisconnected(
          device.id,
          (error, device) => {
            console.log("Device " + device?.name + "has been disconnected");
            this.isSensorPackageDeviceConnected = false;
            this.sensorPackageDevice = null;
          }
        );
      });
  }

  /**
   * Update the given measurement-feed with the latest packets
   * @param measurementFeed the measurement-feed
   */
  public async getMeasurementPacketFeed(
    measurementFeed: Array<MeasurementPacket>
  ) {
    if (
      this.sensorPackageDevice == null ||
      !this.isSensorPackageDeviceConnected
    )
      return;

    // Watch the measurement packet characteristic and update the measurement-feed collection accordingly
    // The characteristic is expected to be notifable to enable monitoring.
    this.sensorPackageDevice.monitorCharacteristicForService(
      SensorPackage.MEASUREMENT_PACKET_SERVICE_UUID,
      SensorPackage.MEASUREMENT_PACKET_CHARACTERISTIC_UUID,
      (error, characteristic) => {
        if (error || !characteristic?.value) return;

        let measurementPacket: MeasurementPacket = JSON.parse(
          characteristic.value
        );

        //Covert the unix time stamp
        measurementPacket.time = convertUnixTimestampToUTCTime(
          measurementPacket.time as number
        );
        measurementFeed.push(measurementPacket);

        console.log("Received new measurementpacket: ", measurementPacket);
      }
    );
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
        SensorPackage.SENSOR_PACKAGE_COMMUNICATION_SERVICE_UUID,
        SensorPackage.APP_REQUEST_CHARACTERISTIC_UUID,
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
      SensorPackage.SENSOR_PACKAGE_COMMUNICATION_SERVICE_UUID,
      SensorPackage.SENSOR_PACKAGE_REQUEST_CHARACTERISTIC_UUID,
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
