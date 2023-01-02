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
export const TIME_FORMAT = "YYYY-DD-MM T hh:mm:SSZ";

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

export const getDateFromTimestamp = (timeStamp: string): string => {
  const date = moment(timeStamp, TIME_FORMAT);

  return (
    MONTH_INDEX_TO_TEXT.get(date.month()) +
    " " +
    date.day() +
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
  const startTimeDate = moment(startTime, TIME_FORMAT);
  const endTimeDate = moment(endTime, TIME_FORMAT);

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
  return getTimeString(startTime) + " - " + getTimeString(endTime);
};

/**
 * Returns a string containing the hour and minutes for a time string
 * @param timeString the time string
 * @returns a string containing the hour and minutes for a time string
 */
export const getTimeString = (timeString: string): string => {
  const time = moment(timeString, TIME_FORMAT).toDate();
  const meridiem = time.getHours() < 12 ? "AM" : "PM";

  return (
    formatTimeComponent(time.getHours()) +
    ":" +
    formatTimeComponent(time.getMinutes()) +
    " " +
    meridiem
  );
};
