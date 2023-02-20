/**
 * Author: Paul Okenne
 * File: RequestTypes
 * Purpose: Contains the different request types
 */

export enum SensorPackageRequestType {
  /**
   * The start trip request
   */
  START_TRIP = "START_TRIP",

  /**
   * The check for offline trips request
   */
  CHECK_FOR_OFFLINE_TRIPS = "CHECK_FOR_OFFLINE_TRIPS",

  /**
   * The drop or accept offline trip request
   */
  DROP_OR_ACCEPT_OFFLINE_TRIP = "DROP_OR_ACCEPT_OFFLINE_TRIP",

  /**
   * The set configuration profile request
   */
  SET_CONFIGURATION_PROFILE = "SET_CONFIGURATION_PROFILE",
}
