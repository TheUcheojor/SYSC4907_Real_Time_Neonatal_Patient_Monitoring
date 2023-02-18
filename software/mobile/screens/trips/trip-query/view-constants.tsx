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
  value: metricConstants.ServerMetricKey | string;
  parent: string | undefined;
}

/**
 * Types
 */
export const allowedStatistics = [
  "avg_vibration",
  "avg_noise",
  "avg_temperature",
  "avg_velocity",
];

export type StatisticsMeasurementPacketKey =
  | "avg_vibration"
  | "avg_noise"
  | "avg_temperature"
  | "avg_velocity";

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
    value: comparsionConstants.GREATER_THAN_KEY,
    parent: undefined,
  },
  {
    label: comparsionConstants.LESS_THAN_LABEL,
    value: comparsionConstants.LESS_THAN_KEY,
    parent: undefined,
  },
  {
    label: comparsionConstants.EQUAL_LABEL,
    value: comparsionConstants.EQUAL_KEY,
    parent: undefined,
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
    value: metricConstants.ServerMetricKey.START_DATE_KEY,
    parent: ItemTypeKey.Date,
  },

  {
    label: metricConstants.END_DATE_LABEL,
    value: metricConstants.ServerMetricKey.END_DATE_KEY,
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
    value:
      metricConstants.AVERAGE_KEY_PREFIX +
      metricConstants.ServerMetricKey.VIBRATION_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX +
      metricConstants.TEMPERATURE_METRIC_TITLE,
    value:
      metricConstants.AVERAGE_KEY_PREFIX +
      metricConstants.ServerMetricKey.TEMPERATURE_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX + metricConstants.NOISE_METRIC_TITLE,
    value:
      metricConstants.AVERAGE_KEY_PREFIX +
      metricConstants.ServerMetricKey.NOISE_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },

  {
    label:
      metricConstants.AVERAGE_LABEL_PREFIX +
      metricConstants.VELOCITY_METRIC_TITLE,
    value:
      metricConstants.AVERAGE_KEY_PREFIX +
      metricConstants.ServerMetricKey.VELOCITY_METRIC_KEY,
    parent: ItemTypeKey.Number,
  },
];
