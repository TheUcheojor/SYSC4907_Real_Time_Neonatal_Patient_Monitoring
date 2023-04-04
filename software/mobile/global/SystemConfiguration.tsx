/**
 * Author: Paul Okenne
 * File: SystemConfiguration
 * Purpose: Configure the system
 */

export const SYSTEM_CONFIGURATION = {
  /**
   * Allows developers to bypass login authentication
   */
  LOGIN_BYPASS_AUTHENTICATION: false,

  /**
   * True when the system is in production; otherwise, false
   */
  PRODUCTION_SERVER_FLAG: true,

  /**
   * True when the developer wants to clear the database
   * when the apps reloads
   */
  CLEAR_DB_ON_APP_RELOAD: false,
} as const;
