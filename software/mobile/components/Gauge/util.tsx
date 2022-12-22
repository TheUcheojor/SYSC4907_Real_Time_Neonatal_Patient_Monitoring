/**
 * Author: Paul Okenne
 * File: util.tsx
 * Purpose: This file provides functions that are used in the Gauge component
 */

import {
  GAUGE_INCREMENT_COUNT,
  GAUGE_INCREMENT,
  LOW_TO_MODERATE_THRESHOLD,
  HAPPY_GUAGE_COLOR,
  MODERATE_TO_HIGH_THRESHOLD,
  MODERATE_GUAGE_COLOR,
  ANGRY_GUAGE_COLOR,
  ANGRY_ICON,
  HAPPY_ICON,
  MODERATE_ICON,
} from "./constants";

/**
 * Generates a random number within a range
 * @param min min number
 * @param max max number
 * @returns a random number
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Generates the gauge increments
 * @returns gauge increments
 */
export const generateGaugeIncrements = (): Array<{ x: number; y: number }> => {
  const increments: Array<{ x: number; y: number }> = [];

  for (let i = GAUGE_INCREMENT_COUNT - 1; i >= 0; i--) {
    if (i == 0 || i == GAUGE_INCREMENT_COUNT - 1) {
      increments.push({ y: 2, x: i * GAUGE_INCREMENT });
    } else {
      increments.push({ y: 3, x: i * GAUGE_INCREMENT });
    }
  }

  return increments;
};

/**
 * Update the guage color based on the vibration level
 * @param vibrationLevel the vibration level
 * @returns the color string
 */
export const updateGaugeColor = (vibrationLevel: number): string => {
  if (vibrationLevel < LOW_TO_MODERATE_THRESHOLD) {
    return HAPPY_GUAGE_COLOR;
  } else if (
    vibrationLevel > LOW_TO_MODERATE_THRESHOLD &&
    vibrationLevel < MODERATE_TO_HIGH_THRESHOLD
  ) {
    return MODERATE_GUAGE_COLOR;
  } else {
    return ANGRY_GUAGE_COLOR;
  }
};

/**
 * Update the face icon based on the vibration level
 * @param vibrationLevel the vibration level
 * @returns the icon
 */
export const updateIcon = (vibrationLevel: number): JSX.Element => {
  if (vibrationLevel < LOW_TO_MODERATE_THRESHOLD) {
    return HAPPY_ICON;
  } else if (
    vibrationLevel > LOW_TO_MODERATE_THRESHOLD &&
    vibrationLevel < MODERATE_TO_HIGH_THRESHOLD
  ) {
    return MODERATE_ICON;
  } else {
    return ANGRY_ICON;
  }
};
