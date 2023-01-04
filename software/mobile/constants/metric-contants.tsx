/**
 * Author: Paul Okenne
 * File: metric constants
 * Purpose: exports constants related to measured metrics
 */

import { ImageSourcePropType } from "react-native";

export const VIBRATION_METRIC_TITLE: string = "Vibration";
export const VIBRATION_GRAPH_COLOUR: string = "#0E9CFF";
export const VIBRATION_ICON_SOURCE: ImageSourcePropType = require("../assets/images/shake.png");
export const VIBRATION_UNITS: string = "Hz";

export const NOISE_METRIC_TITLE: string = "Noise";
export const NOISE_GRAPH_COLOUR: string = "#59D9F5";
export const NOISE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/noise.png");
export const NOISE_UNITS: string = "dB";

export const TEMPERATURE_METRIC_TITLE: string = "Temperature";
export const TEMPERATURE_GRAPH_COLOUR: string = "#9B9E0A";
export const TEMPERATURE_ICON_SOURCE: ImageSourcePropType = require("../assets/images/temperature.png");
export const TEMPERATURE_UNITS: string = "C";

export const VELOCITY_METRIC_TITLE: string = "Velocity";
export const VELOCITY_GRAPH_COLOUR: string = "#AA85E5";
export const VELOCITY_ICON_SOURCE: ImageSourcePropType = require("../assets/images/ambulance.png");
export const VELOCITY_UNITS: string = "dB";
