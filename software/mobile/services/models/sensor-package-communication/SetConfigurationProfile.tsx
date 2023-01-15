/**
 * Author: Paul Okenne
 * File: StartTripRequest
 * Purpose: Contains models relating to the the set-configuration-profile-request
 */

import { BaseRequest } from "./BaseRequest";
import { RequestType } from "./RequestType";

export interface ConfigurationProfile {
  /**
   * The configuration profile name
   */
  readonly configurationProfileName: string;

  /**
   * The sampling rate in hertz
   */
  readonly sampleRate: number;
}
/**
 * The ground based ambulance configuration
 */
export const GROUND_BASED_AMBULANCE_CONFIGURATION: ConfigurationProfile = {
  configurationProfileName: "GROUND_BASED_AMBULANCE_CONFIGURATION",
  sampleRate: 700,
};

/**
 * The air based ambulance configuration
 */
export const AIR_BASED_AMBULANCE_CONFIGURATION: ConfigurationProfile = {
  configurationProfileName: "AIR_BASED_AMBULANCE_CONFIGURATION",
  sampleRate: 1000,
};

/**
 * The water based ambulance configuration
 */
export const WATER_BASED_AMBULANCE_CONFIGURATION: ConfigurationProfile = {
  configurationProfileName: "WATER_BASED_AMBULANCE_CONFIGURATION",
  sampleRate: 400,
};

export class SetConfigurationProfileRequest extends BaseRequest {
  /**
   * The configuration profile
   */
  private configurationProfile: ConfigurationProfile;

  /**
   * The SetConfigurationProfileRequest contructor
   * @param configurationProfile the config profile
   */
  constructor(configurationProfile: ConfigurationProfile) {
    super(RequestType.SET_CONFIGURATION_PROFILE);
    this.configurationProfile = configurationProfile;
  }

  /**
   * Generate a request object
   * @returns a request object
   */
  public generateObject(): {} {
    return {
      requestType: this.requestType,
      configurationProfile: this.configurationProfile,
    };
  }
}
