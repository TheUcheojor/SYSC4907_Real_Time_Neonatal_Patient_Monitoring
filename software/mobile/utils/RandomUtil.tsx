/**
 * Author: Paul Okenne
 * File: Random Util
 * Purpose: Export random-generating helper functions
 */

import MeasurementPacket from "../services/sensor-package/models/MeasurementPacket";

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const generateRandomMeasurementPacket = (): MeasurementPacket => {
  return {
    noise: getRandomInt(1, 50),
    temperature: getRandomInt(1, 50),
    vibration: getRandomInt(1, 50),
    airPressure: getRandomInt(1, 50),
    velocity: getRandomInt(1, 50),
    battery: getRandomInt(1, 50),
    time: Date.now(),
    location: {
      longitude: getRandomInt(1, 1000),
      latitude: getRandomInt(1, 1000),
    },
  } as MeasurementPacket;
};
