import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { RootStackParamList } from "../types";
import { Dimensions } from "react-native";

/**
 * Global Constants
 */
export const APP_NAME: string = "Transport Comfort Analysis";
export const LOGIN_PAGE: keyof RootStackParamList = "Login";

export const APP_WIDTH: number = Dimensions.get("window").width;

// The name of a collection that contains core pages
export const MAIN_PAGE_COLLECTECTION: keyof RootStackParamList = "Main";

/**
 * Login View Constants
 */
export const LOGIN_NAVIGATION_NAME: string = "Login";

export const EMAIL_TITLE: string = "Email";
export const EMAIL_PLACEHOLDER: string = "Your Email...";

export const PASSWORD_TITLE: string = "Password";
export const PASSWORD_PLACEHOLDER: string = "Your Password...";

export const FORGOT_PASSWORD_TEXT: string = "Forgot password?";
export const NO_ACCOUNT_SIGNUP_TEXT: string = "No account? Signup here";

export const LOGIN_BUTTON_TEXT = "Login";

/**
 * Forgot Password View Constants
 */

export const FORGOT_PASSWORD_HEADER: string = "Forgot Password";
export const SEND_TEMPORARY_PASSOWRD_BUTTON_TEXT = "Send Temporary Password";

/**
 * Paramedic View
 */

export const VIBRATION_ICON_PATH: string = "../assets/images/shake.png";
