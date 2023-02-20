/**
 * Author: Paul Okenne
 * File: metric constants
 * Purpose: exports constants related to trip metrics
 */

import { ImageSourcePropType } from "react-native";
import MaskInput, { createNumberMask, Mask } from "react-native-mask-input";
import { StatisticsMeasurementPacketKey } from "../screens/trips/trip-query/view-constants";
import { NumericMetricMeasurementPacketKey } from "../services/models/sensor-package-communication/MeasurementPacket";

/**
 * Prefixes
 */
export const AVERAGE_LABEL_PREFIX = "Average ";
export const AVERAGE_KEY_PREFIX = "avg_";

/**
 * Vibration Constants
 */
export const VIBRATION_METRIC_TITLE: string = "Vibration";
// export const VIBRATION_METRIC_KEY: string = "vibration";
export const VIBRATION_GRAPH_COLOUR: string = "#0E9CFF";
export const VIBRATION_ICON_SOURCE: ImageSourcePropType = require("../assets/images/shake.png");
export const VIBRATION_UNITS: string = "m/s²";
export const VIBRATION_LOW_MEDIUM_THRESHOLD: number = 60;
export const VIBRATION_MEDIUM_HIGH_THRESHOLD: number = 120;

/**
 * Noise Constants
 */
export const NOISE_METRIC_TITLE: string = "Noise";
// export const NOISE_METRIC_KEY: string = "noise";
export const NOISE_GRAPH_COLOUR: string = "#59D9F5";
export const NOISE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/noise.png");
export const NOISE_UNITS: string = "dB";
export const NOISE_LOW_MEDIUM_THRESHOLD: number = 60;
export const NOISE_MEDIUM_HIGH_THRESHOLD: number = 120;

/**
 * Temperature Constants
 */
export const TEMPERATURE_METRIC_TITLE: string = "Temperature";
// export const TEMPERATURE_METRIC_KEY: string = "temperature";
export const TEMPERATURE_GRAPH_COLOUR: string = "#9B9E0A";
export const TEMPERATURE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/temperature.png");
export const TEMPERATURE_UNITS: string = "C";
export const TEMPERATURE_LOW_MEDIUM_THRESHOLD: number = 60;
export const TEMPERATURE_MEDIUM_HIGH_THRESHOLD: number = 120;

/**
 * Velocity Constants
 */
export const VELOCITY_METRIC_TITLE: string = "Speed";
// export const VELOCITY_METRIC_KEY: string = "velocity";
export const VELOCITY_GRAPH_COLOUR: string = "#AA85E5";
export const VELOCITY_ICON_SOURCE: ImageSourcePropType = require("../assets/images/ambulance.png");
export const VELOCITY_UNITS: string = "km/hr";
export const VELOCITY_LOW_MEDIUM_THRESHOLD: number = 60;
export const VELOCITY_MEDIUM_HIGH_THRESHOLD: number = 120;

// Date Contstants
export const START_DATE_LABEL: string = "Start Date";
export const END_DATE_LABEL: string = "End Date";

/**
 * Metric Threshold
 */

export interface MetricThreshold {
  lowToMeduimThreshold: number;
  mediumToHighThreshold: number;
}

/**
 * Get the metric thresholds
 * @param metricKey
 * @returns
 */
export const getMetricThreshold = (
  metricKey: NumericMetricMeasurementPacketKey
): MetricThreshold => {
  switch (metricKey) {
    case "noise":
      return {
        lowToMeduimThreshold: NOISE_LOW_MEDIUM_THRESHOLD,
        mediumToHighThreshold: NOISE_MEDIUM_HIGH_THRESHOLD,
      };

    case "vibration":
      return {
        lowToMeduimThreshold: VELOCITY_LOW_MEDIUM_THRESHOLD,
        mediumToHighThreshold: VIBRATION_MEDIUM_HIGH_THRESHOLD,
      };
    case "temperature":
      return {
        lowToMeduimThreshold: TEMPERATURE_LOW_MEDIUM_THRESHOLD,
        mediumToHighThreshold: TEMPERATURE_MEDIUM_HIGH_THRESHOLD,
      };
    case "velocity":
      return {
        lowToMeduimThreshold: VELOCITY_LOW_MEDIUM_THRESHOLD,
        mediumToHighThreshold: VELOCITY_MEDIUM_HIGH_THRESHOLD,
      };
  }

  return {
    lowToMeduimThreshold: -1,
    mediumToHighThreshold: -1,
  };
};

/**
 * Given a metric key, returns its units
 * @param metricKey the metric key
 * @returns
 */
export const getUnits = (metricKey: StatisticsMeasurementPacketKey): string => {
  switch (metricKey) {
    case "avg_noise":
      return NOISE_UNITS;

    case "avg_vibration":
      return VIBRATION_UNITS;

    case "avg_temperature":
      return TEMPERATURE_UNITS;

    case "avg_velocity":
      return VELOCITY_UNITS;
  }

  return "";
};

export const getMetricMask = (
  metricKey: StatisticsMeasurementPacketKey
): Mask => {
  return createNumberMask({
    prefix: [getUnits(metricKey), " "],
    delimiter: ",",
    separator: ".",
    precision: 2,
  });
};
