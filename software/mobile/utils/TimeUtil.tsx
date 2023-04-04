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
export const HOUR_IN_MINUTES = 60;
export const MINUTE_IN_SECONDS = 60;
export const DAY_IN_HOURS = 24;
export const DATABASE_FULL_DATE_FORMAT = "YYYY-MM-DDTHH:mm:ssZ";
export const FULL_DISPLAY_TIME_FORMAT = "hh:mm:SS A";
export const SIMPLIFIED_DISPLAY_TIME_FORMAT = "hh:mm A";
export const SEARCH_DATE_FORMAT = "YYYY/MM/DD";

export const MONTH_INDEX_TO_TEXT: Map<number, string> = new Map<number, string>(
  [
    [0, "Jan"],
    [1, "Feb"],
    [2, "Mar"],
    [3, "Apr"],
    [4, "May"],
    [5, "Jun"],
    [6, "Jul"],
    [7, "Aug"],
    [8, "Sept"],
    [9, "Oct"],
    [10, "Nov"],
    [11, "Dec"],
  ]
);

/**
 * Given a date string, return the epoch that represents the start of that day
 */
export const getDayStartEpoch = (date: string): number => {
  let startTime = new Date(date).setHours(0, 0, 0, 0);
  return startTime / SECOND_IN_MILLISECONDS;
};

/**
 * Given a date string, return the epoch that represents the start of that day
 */
export const getDayEndEpoch = (date: string): number => {
  let endTime = new Date(date).setHours(
    DAY_IN_HOURS - 1,
    HOUR_IN_MINUTES - 1,
    MINUTE_IN_SECONDS - 1,
    SECOND_IN_MILLISECONDS - 1
  );

  return endTime / SECOND_IN_MILLISECONDS;
};

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
 * Covert given time string to unix timestamp
 * @param timeString the given time string
 * @returns unix timestamp
 */
export const covertTimeStringToUnixTimestamp = (timeString: string): number => {
  return moment(timeString, DATABASE_FULL_DATE_FORMAT).unix();
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
export const formatUnixTimestamp = (unixTimestamp: number): string => {
  var unformattedDate = new Date(unixTimestamp * SECOND_IN_MILLISECONDS);
  return moment(unformattedDate).format(DATABASE_FULL_DATE_FORMAT);
};

export const getDateFromTimestamp = (timeStamp: string): string => {
  console.log(timeStamp);
  const date = moment(timeStamp, DATABASE_FULL_DATE_FORMAT);

  return (
    MONTH_INDEX_TO_TEXT.get(date.month()) +
    " " +
    date.date() +
    ", " +
    date.year()
  );
};

/**
 * Produce a string that contains the start and end date
 * @param startTime the start time
 * @param endTime the end time
 * @returns
 */
export const getTripDate = (startTime: string, endTime: string): string => {
  if (isDayEqual(startTime, endTime)) return getDateFromTimestamp(startTime);

  return (
    getDateFromTimestamp(startTime) + " => " + getDateFromTimestamp(endTime)
  );
};

/**
 * Returns true if the start time and end time are on the same day
 * @param startTime the start time
 * @param endTime the end time
 * @returns a flag that indicates whether two dates are on the same day
 */
export const isDayEqual = (startTime: string, endTime: string): boolean => {
  const startTimeDate = moment(startTime, DATABASE_FULL_DATE_FORMAT);
  const endTimeDate = moment(endTime, DATABASE_FULL_DATE_FORMAT);

  return (
    startTimeDate.day == endTimeDate.day &&
      startTimeDate.month == endTimeDate.month,
    startTimeDate.year == endTimeDate.year
  );
};

/**
 * Returns a string that contains the elsapsed trip time
 * @param startTime the start time
 * @param endTime the end time
 * @returns a string that contains the elsapsed trip time
 */
export const getTripTimeString = (
  startTime: string,
  endTime: string
): string => {
  return (
    getSimplifiedTimeString(startTime) +
    " - " +
    getSimplifiedTimeString(endTime)
  );
};

/**
 * Returns a simiplified string containing the hour and minutes for a time string
 * @param timeString the time string
 * @returns a string containing the hour and minutes for a time string
 */
export const getSimplifiedTimeString = (timeString: string): string => {
  return moment(timeString, DATABASE_FULL_DATE_FORMAT).format(
    SIMPLIFIED_DISPLAY_TIME_FORMAT
  );
};

/**
 * Returns a string containing the hour, minutes, and seconds for a time string
 * @param timeString the time string
 * @returns a string containing the hour and minutes for a time string
 */
export const getFullTimeString = (timeString: string): string => {
  return moment(timeString, DATABASE_FULL_DATE_FORMAT).format(
    FULL_DISPLAY_TIME_FORMAT
  );
};
