/**
 * Author: Paul Okenne
 * File: Random Util
 * Purpose: Export random-generating helper functions
 */

import RouteLocation from "../services/models/common/Location";
import MeasurementPacket from "../services/models/sensor-package-communication/MeasurementPacket";
import ServerTripRoute from "../services/models/server-communication/ServerTripRoute";
import { formatUnixTimestamp } from "./TimeUtil";

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
export const generateRandomMeasurementPacket = (
  location: RouteLocation
): MeasurementPacket => {
  return {
    noise: getRandomInt(20, 170),
    temperature: getRandomInt(20, 170),
    vibration: getRandomInt(20, 170),
    airPressure: getRandomInt(20, 170),
    velocity: getRandomInt(20, 170),
    battery: getRandomInt(20, 170),
    time: formatUnixTimestamp(Date.now()),
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
    total_vibration: getRandomInt(1, 100),
    avg_temperature: getRandomInt(1, 100),
    avg_noise: getRandomInt(1, 100),
    avg_pressure: getRandomInt(1, 100),
    avg_vibration: getRandomInt(1, 100),
    avg_velocity: getRandomInt(1, 100),
    start_time_s: getRandomInt(1674597742 - 100000, 1674597742 + 100000),
    end_time_s: getRandomInt(1674597742 - 100000, 1674597742 + 100000),
  };
};
