/**
 * Author: Paul Okenne
 * File: util.tsx
 * Purpose: This file provides functions that are used in the Gauge component
 */

import {
  GAUGE_INCREMENT_COUNT,
  LOW_TO_MODERATE_THRESHOLD_DEFAULT,
  HAPPY_GUAGE_COLOR,
  MODERATE_TO_HIGH_THRESHOLD_DEFAULT,
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
 * @params gaugeMax the max gauge value
 * @returns gauge increments
 */
export const generateGaugeIncrements = (
  gaugeMax: number
): Array<{ x: number; y: number }> => {
  const increments: Array<{ x: number; y: number }> = [];

  const gaugeIncrement = Math.floor(gaugeMax / (GAUGE_INCREMENT_COUNT - 1));

  for (let i = GAUGE_INCREMENT_COUNT - 1; i >= 0; i--) {
    if (i == 0 || i == GAUGE_INCREMENT_COUNT - 1) {
      increments.push({ y: 2, x: i * gaugeIncrement });
    } else {
      increments.push({ y: 3, x: i * gaugeIncrement });
    }
  }

  return increments;
};

/**
 * Update the guage color based on the vibration level
 * @param vibrationLevel the vibration level
 * @returns the color string
 */
export const updateGaugeColor = (
  vibrationLevel: number,
  lowModerateThreshold: number,
  moderateHighThreshold: number
): string => {
  if (vibrationLevel < lowModerateThreshold) {
    return HAPPY_GUAGE_COLOR;
  } else if (
    vibrationLevel > lowModerateThreshold &&
    vibrationLevel < moderateHighThreshold
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
export const updateIcon = (
  vibrationLevel: number,
  lowModerateThreshold: number,
  moderateHighThreshold: number
): JSX.Element => {
  if (vibrationLevel < lowModerateThreshold) {
    return HAPPY_ICON;
  } else if (
    vibrationLevel > lowModerateThreshold &&
    vibrationLevel < moderateHighThreshold
  ) {
    return MODERATE_ICON;
  } else {
    return ANGRY_ICON;
  }
};
