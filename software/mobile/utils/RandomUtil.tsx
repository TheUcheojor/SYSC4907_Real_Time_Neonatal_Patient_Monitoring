/**
 * Author: Paul Okenne
 * File: Random Util
 * Purpose: Export random-generating helper functions
 */

import RouteLocation from "../services/models/common/Location";
import MeasurementPacket from "../services/models/sensor-package-communication/MeasurementPacket";
import ServerTripRoute from "../services/models/server-communication/ServerTripRoute";
import { formatUnixTimestamp, SECOND_IN_MILLISECONDS } from "./TimeUtil";

/**
 * Get a random number between the min and max values
 * @param min the min value
 * @param max the max value
 * @returns a random number between the min and max values
 */
export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between the min and max values
 * @param min the min value
 * @param max the max value
 * @returns a random number between the min and max values
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(getRandomNumber(min, max));
}

/**
 * Generates a random measurement packet
 * @returns
 */
export const generateRandomMeasurementPacket = (
  location: RouteLocation
): MeasurementPacket => {
  return {
    noise: getRandomInt(0, 120),
    temperature: getRandomInt(0, 120),
    vibration: getRandomNumber(0, 120),
    airPressure: getRandomInt(0, 120),
    speed: getRandomInt(0, 120),
    battery: getRandomInt(0, 100),
    time: formatUnixTimestamp(Date.now() / SECOND_IN_MILLISECONDS),
    location: location,
  } as MeasurementPacket;
};

/**
 * Generates a random server trip route
 * @returns a random server trip route
 */
export const generateRandomServerTripRoute = (): ServerTripRoute => {
  return {
    route_id: 2,
    owner_id: 1,
    patient_id: "john",
    organization_id: "",
    total_vibration: getRandomNumber(1, 100),
    avg_temperature: getRandomNumber(1, 100),
    avg_noise: getRandomNumber(1, 100),
    avg_pressure: getRandomNumber(1, 100),
    avg_vibration: getRandomNumber(1, 100),
    avg_velocity: getRandomNumber(1, 100),
    start_time_s: getRandomInt(1674597742 - 100000, 1674597742 + 100000),
    end_time_s: getRandomInt(1674597742 - 100000, 1674597742 + 100000),
  };
};
