/**
 * Author: Paul Okenne
 * File: MeasurementPacket
 * Purpose: This file returns the measurement packet model, the expected feed from the sensor package
 */

import RouteLocation from "../common/Location";

export default interface MeasurementPacket {
  /**
   * The noise in Decibels
   */
  readonly noise: number;

  /**
   * The temperature in Celsius
   */
  readonly temperature: number;

  /**
   * The vibration level in Hertz
   */
  readonly vibration: number;

  /**
   * The air pressure in Pascals
   */
  readonly airPressure: number;

  /**
   * The speed in meters per seconds
   */
  readonly speed: number;

  /**
   * The battern percentage
   */
  readonly battery: number | undefined;

  /**
   * The time stamp formatted in the UTC Format:  YYYY-DD-MM T HH:MM:SSZ.
   * Originally this is sent from the microcontroller as a Unix moment.
   */
  time: string | number;

  /**
   * The location, a latitude-longitude pair in degrees.
   */
  readonly location: RouteLocation;
}

export const MEASUREMENT_PACKET_KEYS = [
  "noise",
  "temperature",
  "vibration",
  "airPressure",
  "speed",
  "battery",
  "time",
  "location",
];

export const LOCATION_KEYS = ["longitude", "latitude"];

export type NumericMetricMeasurementPacketKey = keyof MeasurementPacket &
  ("vibration" | "noise" | "temperature" | "speed");

export const VIBRATION_KEY_MEASUREMENT_PACKET: NumericMetricMeasurementPacketKey =
  "vibration";
export const NOISE_KEY_MEASUREMENT_PACKET: NumericMetricMeasurementPacketKey =
  "noise";
export const TEMPERATURE_KEY_MEASUREMENT_PACKET: NumericMetricMeasurementPacketKey =
  "temperature";
export const VELOCITY_KEY_MEASUREMENT_PACKET: NumericMetricMeasurementPacketKey =
  "speed";

export const NUMERIC_METRIC_MEASUREMENT_PACKET_KEYS: NumericMetricMeasurementPacketKey[] =
  [
    VIBRATION_KEY_MEASUREMENT_PACKET,
    NOISE_KEY_MEASUREMENT_PACKET,
    TEMPERATURE_KEY_MEASUREMENT_PACKET,
    VELOCITY_KEY_MEASUREMENT_PACKET,
  ];
