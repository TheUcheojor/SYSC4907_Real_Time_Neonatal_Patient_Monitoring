/**
 * Author: Paul Okenne
 * Name: Validator Util
 * Purpose: Exports validator functions
 */

import MeasurementPacket, {
  LOCATION_KEYS,
  MEASUREMENT_PACKET_KEYS,
} from "../services/models/sensor-package-communication/MeasurementPacket";

/**
 * The min password length
 */
export const MINIMUM_PASSWORD_LENGTH = 7;

/**
 * The min full name length
 */
export const MINIMUM_FULL_NAME_LENGTH = 3;

/**
 * Checks if a given text is an email
 * @param text the given text
 * @returns true if it the text is an email
 */
export const isEmail = (text: string): boolean => {
  const expression: RegExp =
    /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

  return expression.test(text);
};

/**
 * Return true if the password is valid
 * @param password the password
 * @returns true if the password is valid
 */
export const isValidPassword = (password: string): boolean => {
  if (password.length < MINIMUM_PASSWORD_LENGTH) {
    return false;
  }

  // Check that the password has capitals and lowercases
  if (
    !password
      .toUpperCase()
      .split("")
      .find((character: string) => password.includes(character)) ||
    !password
      .toLowerCase()
      .split("")
      .find((character: string) => password.includes(character))
  ) {
    return false;
  }
  return true;
};

/**
 * Return true if the full name is valid
 * @param fullName the full Name
 * @returns true if the full name is valid
 */
export const isValidFullName = (fullName: string) => {
  return fullName.length > MINIMUM_FULL_NAME_LENGTH;
};

/**
 * Return true if the measurementPacket is valid
 * @param measurementPacket the measurement-packet
 * @returns true if the measurementPacket is valid
 */
export const isValidMeasurePacket = (
  measurementPacket: MeasurementPacket
): boolean => {
  // Check that the correct keys are presented
  if (
    !Object.keys(measurementPacket).every((packetKey: string) =>
      MEASUREMENT_PACKET_KEYS.includes(packetKey)
    ) &&
    !Object.keys(measurementPacket.location).every((locationKey: string) =>
      LOCATION_KEYS.includes(locationKey)
    )
  ) {
    return false;
  }

  // Validate the type of each property value
  if (
    typeof measurementPacket.noise == "number" &&
    typeof measurementPacket.temperature == "number" &&
    typeof measurementPacket.vibration == "number" &&
    typeof measurementPacket.airPressure == "number" &&
    typeof measurementPacket.speed == "number" &&
    typeof measurementPacket.time == "number" &&
    typeof measurementPacket.battery == "number" &&
    typeof measurementPacket.location == "object" &&
    typeof measurementPacket.location.latitude == "number" &&
    typeof measurementPacket.location.longitude == "number"
  ) {
    return true;
  }

  return false;
};
