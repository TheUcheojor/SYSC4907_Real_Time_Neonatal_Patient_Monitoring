/**
 * Author: Paul Okenne
 * File: metric constants
 * Purpose: exports constants related to trip metrics
 */

import { ImageSourcePropType } from "react-native";
import MaskInput, { createNumberMask, Mask } from "react-native-mask-input";

export const VIBRATION_METRIC_TITLE: string = "Vibration";
// export const VIBRATION_METRIC_KEY: string = "vibration";
export const VIBRATION_GRAPH_COLOUR: string = "#0E9CFF";
export const VIBRATION_ICON_SOURCE: ImageSourcePropType = require("../assets/images/shake.png");
export const VIBRATION_UNITS: string = "Hz";

export const NOISE_METRIC_TITLE: string = "Noise";
// export const NOISE_METRIC_KEY: string = "noise";
export const NOISE_GRAPH_COLOUR: string = "#59D9F5";
export const NOISE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/noise.png");
export const NOISE_UNITS: string = "dB";

export const TEMPERATURE_METRIC_TITLE: string = "Temperature";
// export const TEMPERATURE_METRIC_KEY: string = "temperature";
export const TEMPERATURE_GRAPH_COLOUR: string = "#9B9E0A";
export const TEMPERATURE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/temperature.png");
export const TEMPERATURE_UNITS: string = "C";

export const VELOCITY_METRIC_TITLE: string = "Velocity";
// export const VELOCITY_METRIC_KEY: string = "velocity";
export const VELOCITY_GRAPH_COLOUR: string = "#AA85E5";
export const VELOCITY_ICON_SOURCE: ImageSourcePropType = require("../assets/images/ambulance.png");
export const VELOCITY_UNITS: string = "m/s";

// export const START_DATE_KEY: string = "startDate";
export const START_DATE_LABEL: string = "Start Date";

// export const END_DATE_KEY: string = "endDate";
export const END_DATE_LABEL: string = "End Date";

export enum MetricKey {
  VIBRATION_METRIC_KEY = "vibration",
  NOISE_METRIC_KEY = "noise",
  TEMPERATURE_METRIC_KEY = "temperature",
  VELOCITY_METRIC_KEY = "velocity",
  END_DATE_KEY = "endDate",
  START_DATE_KEY = "startDate",
}

export const getUnits = (metricKey: MetricKey): string => {
  switch (metricKey) {
    case MetricKey.NOISE_METRIC_KEY:
      return NOISE_UNITS;

    case MetricKey.VIBRATION_METRIC_KEY:
      return VIBRATION_UNITS;

    case MetricKey.TEMPERATURE_METRIC_KEY:
      return TEMPERATURE_UNITS;

    case MetricKey.VELOCITY_METRIC_KEY:
      return VELOCITY_UNITS;
  }

  return "";
};

export const getMetricMask = (metricKey: MetricKey): Mask => {
  return createNumberMask({
    prefix: [getUnits(metricKey), " "],
    delimiter: ",",
    separator: ".",
    precision: 2,
  });
};
