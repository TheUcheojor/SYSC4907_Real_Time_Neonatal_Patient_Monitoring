/**
 * Author: Paul Okenne
 * File: UserLoginRequest
 * Purpose: Exports the models for authentication requests
 */

/**
 * The base authentication request
 */
interface BaseAuthenticationRequest {
  email: string;
  password: string;
}

export interface LoginRequest extends BaseAuthenticationRequest {}

export interface SignupRequest extends BaseAuthenticationRequest {
  fullName: string;
}
