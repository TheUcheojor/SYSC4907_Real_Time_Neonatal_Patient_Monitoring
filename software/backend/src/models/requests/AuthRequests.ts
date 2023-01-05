import { Request } from "express";

export interface LoginRequest extends Request {
    email?: string;
    password?: string;
}

export interface SignUpRequest extends Request {
    full_name?: string;
    email?: string;
    password?: string;
}