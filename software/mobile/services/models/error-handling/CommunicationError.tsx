/**
 * Author: Paul Okenne
 * File: CommunicationErrors
 * Purpose: exports an enu containing communication errors
 */

export enum CommunicationError {
  SESSION_EXPIRED = "Session does not exist",
  SERVER_COMMUNICATION_ERROR = "Server Communication Error",
  FETCHING_ERROR = "An error occurred while fetching.",
}
