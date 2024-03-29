/**
 * Author: Paul Okenne
 * File: CommunicationErrors
 * Purpose: exports an enum containing communication errors
 */

export enum CommunicationError {
  SESSION_EXPIRED = "Session does not exist",
  SERVER_COMMUNICATION_ERROR = "Server Communication Error",
  SEARCH_FAILURE = "Searching Error",
  SERVER_INAVAILABILITY = "The server may not be available or failed to serve the request.",
  FETCHING_ERROR = "Fetching Error",
  UPLOADING_ERROR = "Uploading Error",
  AUTHENTICATION_ERROR = "Authentication Error",
  FORGOT_PASSWORD_ERROR = "Forgot Password Error",
}
