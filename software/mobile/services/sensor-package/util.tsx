/**
 * Author: Paul Okenne
 * File: util (Sensor Package)
 * Purpose: Provides supporting function that enables sensor package communication
 */

import moment from "moment";

/**
 * Returns the formatted date from a unix timestamp
 * @param unixTimestamp the unix timestamp
 * @returns the formatted date
 */
export const convertUnixTimestampToUTCTime = (unixTimestamp: number) => {
  var unformattedDate = new Date(unixTimestamp);
  return moment(unformattedDate).format(TIME_FORMAT);
};
