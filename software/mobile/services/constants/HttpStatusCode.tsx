/**
 * Author: Paul Okenne
 * File: HttpStatusCode
 * Purpose: Exports the enum containing Http request types
 */

export enum HttpStatusCode {
  OK_REQUEST = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}
