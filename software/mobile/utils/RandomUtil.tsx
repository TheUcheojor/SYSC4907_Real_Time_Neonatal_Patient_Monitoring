/**
 * Author: Paul Okenne
 * File: Random Util
 * Purpose: Export random-generating helper functions
 */

import MeasurementPacket from "../services/models/sensor-package-communication/MeasurementPacket";
import ServerTripRoute from "../services/models/server-communication/ServerTripRoute";
import { convertUnixTimestampToUTCTime } from "./TimeUtil";

/**
 * Get a random number between the min and max values
 * @param min the min value
 * @param max the max value
 * @returns a random number between the min and max values
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generates a random measurement packet
 * @returns
 */
export const generateRandomMeasurementPacket = (): MeasurementPacket => {
  return {
    noise: getRandomInt(1, 50),
    temperature: getRandomInt(1, 50),
    vibration: getRandomInt(110, 170),
    airPressure: getRandomInt(1, 50),
    velocity: getRandomInt(1, 50),
    battery: getRandomInt(1, 50),
    time: convertUnixTimestampToUTCTime(Date.now()),
    location: {
      longitude: getRandomInt(1, 1000),
      latitude: getRandomInt(1, 1000),
    },
  } as MeasurementPacket;
};

/**
 * Generates a random server trip route
 * @returns a random server trip route
 */
export const generateRandomServerTripRoute = (): ServerTripRoute => {
  return {
    routeId: 2,
    patientId: "john",
    startTime: convertUnixTimestampToUTCTime(Date.now()),
    endTime: convertUnixTimestampToUTCTime(Date.now()),

    ownerId: "",
    organizationId: "",
    totalVibrationExposure: getRandomInt(1, 100),
    avgTemperature: getRandomInt(1, 100),
    avgNoise: getRandomInt(1, 100),
    avgPressure: getRandomInt(1, 100),
    avgVibration: getRandomInt(1, 100),
    avgVelocity: getRandomInt(1, 100),
  };
};
