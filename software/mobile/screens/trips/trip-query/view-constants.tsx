/**
 * Author: Paul Okenne
 * File: trip-query/view-constants
 * Purpose: Export view constants for the trip query view
 */
import * as comparsionConstants from "../../../constants/comparsion-constants";
import * as metricConstants from "../../../constants/metric-constants";

/**
 * The dropdown item type which indicates whether the item is date or number
 */
export enum ItemTypeKey {
  Date = "Date",
  Number = "Number",
}

/**
 * The drop down item
 */
export interface DropdownItem {
  label: string;
  value: string | comparsionConstants.ComparsionOperator;
  parent?: string;
}

/**
 * Types and Enums
 */
export const allowedStatistics = [
  "avg_vibration",
  "avg_noise",
  "avg_temperature",
  "avg_velocity",
  "total_vibration",
];

export type StatisticsMeasurementPacketKey =
  | "avg_vibration"
  | "avg_noise"
  | "avg_temperature"
  | "avg_velocity"
  | "total_vibration";

/**
 * The server metric key
 *
 * The server uses snake casing for the database.
 */
export enum ServerMetricKey {
  VIBRATION_METRIC_KEY = "avg_vibration",
  NOISE_METRIC_KEY = "avg_noise",
  TEMPERATURE_METRIC_KEY = "avg_temperature",
  VELOCITY_METRIC_KEY = "avg_velocity",
  TOTAL_VIBRATION_KEY = "total_vibration",
  END_DATE_KEY = "end_time_s",
  START_DATE_KEY = "start_time_s",
}

/**
 * Text
 */
export const ENTER_DATE_FORMAT = "YYYY/MM/DD";
export const ENTER_NUMBER_PLACEHOLDER = "Enter a number in ";
export const ON_PRESS_SEARCH_COLOUR: string = "#2F2F2F";

/**
 * Dropdown item for the selectors
 */
export const COMPARISON_OPERATORS_ITEMS: DropdownItem[] = [
  {
    label: comparsionConstants.GREATER_THAN_LABEL,
    value: comparsionConstants.ComparsionOperator.GREATER_THAN,
  },
  {
    label: comparsionConstants.LESS_THAN_LABEL,
    value: comparsionConstants.ComparsionOperator.LESS_THAN,
  },
  {
    label: comparsionConstants.EQUAL_LABEL,
    value: comparsionConstants.ComparsionOperator.EQUAL,
  },
];

export const TRIP_PROPERTY_ITEMS: DropdownItem[] = [
  {
    label: ItemTypeKey.Date,
    value: ItemTypeKey.Date,
    parent: undefined,
  },

  {
    label: metricConstants.START_DATE_LABEL,
    value: ServerMetricKey.START_DATE_KEY,
    parent: ItemTypeKey.Date,
  },

  {
    label: metricConstants.END_DATE_LABEL,
    value: ServerMetricKey.END_DATE_KEY,
    parent: ItemTypeKey.Date,
  },

  {
    label: ItemTypeKey.Number,
    value: ItemTypeKey.Number,
    parent: undefined,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX +
      metricConstants.VIBRATION_METRIC_TITLE,
    value: ServerMetricKey.VIBRATION_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX +
      metricConstants.TEMPERATURE_METRIC_TITLE,
    value: ServerMetricKey.TEMPERATURE_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX + metricConstants.NOISE_METRIC_TITLE,
    value: ServerMetricKey.NOISE_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX +
      metricConstants.VELOCITY_METRIC_TITLE,
    value: ServerMetricKey.VELOCITY_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },
  {
    label: metricConstants.TOTAL_VIBRATION_METRIC_TITLE,
    value: ServerMetricKey.TOTAL_VIBRATION_KEY,
    parent: ItemTypeKey.Number,
  },
];
