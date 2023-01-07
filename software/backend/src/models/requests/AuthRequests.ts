import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user_id?: string;
}

export interface LoginRequest extends Request {
  email?: string;
  password?: string;
}

export interface SignUpRequest extends Request {
  full_name?: string;
  email?: string;
  password?: string;
}

export interface ChangePasswordRequest extends AuthenticatedRequest {
  oldPassword?: string;
  newPassword?: string;
}
