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
  PRODUCTION_SERVER_FLAG: false,

  /**
   * True when the developer wants to begin demoing live data when
   * the settings page rendered(first navigated to). Simulates a sensor-package feed.
   *
   * You may need to reload the application once changed
   */
  TRIGGER_DEMO_LIVE_DATAFEED_ON_SETTINGS_RENDER: true,
} as const;
