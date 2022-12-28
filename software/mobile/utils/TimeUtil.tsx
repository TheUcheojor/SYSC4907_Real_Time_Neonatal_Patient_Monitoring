/**
 * Author: Paul Okenne
 * File: TimeUtil
 * Purpose: Exports useful time-related functions
 */

/**
 * Time constants
 */
export const SECOND_IN_MILLISECONDS = 1000;
export const MINUTE_IN_MILLISECONDS = 60 * SECOND_IN_MILLISECONDS;
export const HOUR_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 60;

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

const formatTimeComponent = (timeComponent: number): string => {
  return ("0" + timeComponent).slice(-2);
};
