/**
 * Author: Paul Okenne
 * File: MeasurementPacket
 * Purpose: This file returns the measurement packet model, the expected feed from the sensor package
 */

export default interface MeasurementPacket {
  /**
   * The noise in Decibels
   */
  noise: number;

  /**
   * The temperature in Celsius
   */
  temperature: number;

  /**
   * The vibration level in Hertz
   */
  vibration: number;

  /**
   * The air pressure in Pascals
   */
  airPressure: number;

  /**
   * The velocity in meters per seconds
   */
  velocity: number;

  /**
   * The battern percentage
   */
  battery: number;

  /**
   * The time stamp formatted in the UTC Format:  YYYY-DD-MM T HH:MM:SSZ.
   * Originally this is sent from the microcontroller as a Unix moment.
   */
  time: string | number;

  /**
   * The location, a latitude-longitude pair in degrees.
   */
  location: { longitude: number; latitude: number };
}
