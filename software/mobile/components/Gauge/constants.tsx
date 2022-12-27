/**
 * Author: Paul Okenne
 * File: Gauge Constants
 * Purpose: Contains important constants pertaining to the Guage component
 */

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { StyleSheet } from "react-native";

/**
 * The color of guage for moderate ranges
 */
export const MODERATE_GUAGE_COLOR = "#FFF500";

/**
 * The color of guage for high ranges
 */
export const ANGRY_GUAGE_COLOR = "#FF5C5C";

/**
 * The color of guage for low ranges
 */
export const HAPPY_GUAGE_COLOR = "#2DB021";

/**
 * The threshold that seperates low from moderate measurements
 */
export const LOW_TO_MODERATE_THRESHOLD_DEFAULT = 60;

/**
 * The threshold that seperates moderate from high measurements
 */
export const MODERATE_TO_HIGH_THRESHOLD_DEFAULT = 130;

/**
 * The guage heigh
 */
export const GAUGE_HEIGHT = 350;

/**
 * The gauge width
 */
export const GAUGE_WIDTH = 420;

/**
 * The gauge inner radius, the hollowed out part of the circle
 */
export const INNER_RADIUS = GAUGE_WIDTH / 2 - 100;

/**
 * The max value of the guage
 */
export const GAUGE_MAX_DEFAULT = 180;

/**
 * The number of increments on the gauge
 */
export const GAUGE_INCREMENT_COUNT = 7;

/**
 * The gauge animation duration in mulliseconds
 */
export const ANIMATION_DURATION_MILLISECONDS = 300;

/**
 * The starting angle of the guage
 */
export const GAUGE_START_ANGLE = 135;

/**
 * The Icon styling
 */
const ICON_STYLE = StyleSheet.create({
  icon: {
    position: "absolute",
    alignSelf: "center",
    top: "85%",
  },
});

/**
 * The happy icon
 */
export const HAPPY_ICON: JSX.Element = (
  <MaterialCommunityIcons
    name="emoticon-happy-outline"
    size={80}
    color="#969696"
    style={ICON_STYLE.icon}
  />
);

/**
 * The moderate icon
 */
export const MODERATE_ICON: JSX.Element = (
  <MaterialIcons
    name="sentiment-dissatisfied"
    size={80}
    color="#969696"
    style={ICON_STYLE.icon}
  />
);

/**
 * The angry icon
 */
export const ANGRY_ICON: JSX.Element = (
  <FontAwesome5
    name="angry"
    size={80}
    color="#969696"
    style={ICON_STYLE.icon}
  />
);
