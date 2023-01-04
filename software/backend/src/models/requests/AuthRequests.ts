import { Request } from "express";

export interface LoginRequest extends Request {
    email?: string;
    hashed_password?: string;
}

export interface SignUpRequest extends Request {
    full_name?: string;
    email?: string;
    hashed_password?: string;
}