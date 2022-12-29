/**
 * Author: Paul Okenne
 * File: TimeUtil
 * Purpose: Exports useful time-related functions
 */

import moment from "moment";

/**
 * Time constants
 */
export const SECOND_IN_MILLISECONDS = 1000;
export const MINUTE_IN_MILLISECONDS = 60 * SECOND_IN_MILLISECONDS;
export const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60;
export const TIME_FORMAT = "YYYY-DD-MM T HH:MM:SSZ";

/**
 * Formate the given milliseconds to hh:mm:ss
 * @param timeInMilliseconds  the given milliseconds
 * @returns give format time
 */
export const getFormatedTimeFromMilliSeconds = (
  timeInMilliseconds: number
): string => {
  let hoursComponent: String = formatTimeComponent(
    Math.floor(timeInMilliseconds / HOUR_IN_MILLISECONDS) % 24
  );

  let minutesComponent: String = formatTimeComponent(
    Math.floor(timeInMilliseconds / MINUTE_IN_MILLISECONDS) % 60
  );

  let secondsComponent: String = formatTimeComponent(
    Math.floor(timeInMilliseconds / SECOND_IN_MILLISECONDS) % 60
  );

  return hoursComponent + ":" + minutesComponent + ":" + secondsComponent;
};

/**
 * Format the given time component
 * @param timeComponent
 * @returns
 */
const formatTimeComponent = (timeComponent: number): string => {
  return ("0" + timeComponent).slice(-2);
};

/**
 * Returns the formatted date from a unix timestamp
 * @param unixTimestamp the unix timestamp
 * @returns the formatted date
 */
export const convertUnixTimestampToUTCTime = (unixTimestamp: number) => {
  var unformattedDate = new Date(unixTimestamp);
  return moment(unformattedDate).format(TIME_FORMAT);
};
