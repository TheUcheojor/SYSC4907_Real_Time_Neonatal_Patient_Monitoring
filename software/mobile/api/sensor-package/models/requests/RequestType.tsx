/**
 * Author: Paul Okenne
 * File: RequestTypes
 * Purpose: Contains the different request types
 */

export enum RequestType {
  /**
   * The start trip request
   */
  START_TRIP = "StartTrip",

  /**
   * The check for offline trips request
   */
  CHECK_FOR_OFFLINE_TRIPS = "FetchOfflineTrips",

  /**
   * The drop or accept offline trip request
   */
  DROP_OR_ACCEPT_OFFLINE_TRIP = "DropOrAcceptOfflineTrip",

  /**
   * The set configuration profile request
   */
  SET_CONFIGURATION_PROFILE = "SetConfigurationProfile",
}
