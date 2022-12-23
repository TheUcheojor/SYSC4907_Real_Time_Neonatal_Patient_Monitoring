/**
 * Author: Paul Okenne
 * File: MeasurementPacket
 * Purpose: This file returns the measurement packet model, the expected feed from the sensor package
 */

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
   * The velocity in meters per seconds
   */
  readonly velocity: number;

  /**
   * The battern percentage
   */
  readonly battery: number;

  /**
   * The time stamp formatted in the UTC Format:  YYYY-DD-MM T HH:MM:SSZ.
   * Originally this is sent from the microcontroller as a Unix moment.
   */
  time: string | number;

  /**
   * The location, a latitude-longitude pair in degrees.
   */
  readonly location: { readonly longitude: number; readonly latitude: number };
}
