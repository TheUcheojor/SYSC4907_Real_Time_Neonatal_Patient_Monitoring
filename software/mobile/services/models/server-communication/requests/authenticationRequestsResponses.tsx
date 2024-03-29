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

export interface LoginResponse {
  full_name: string;
}

export interface SignupRequest extends BaseAuthenticationRequest {
  full_name: string;
}

export interface ForgotPasswordRequest {
  email: string;
}
