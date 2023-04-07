/**
 * Author: Paul Okenne
 * File: UserSessionService
 * Purpose: Exports functions for managing user sessions
 */
import EncryptedStorage from "react-native-encrypted-storage";
import { SYSTEM_CONFIGURATION } from "../global/SystemConfiguration";
import LoggerService from "./LoggerService";

export interface UserSession {
  fullName: string;
  authenticationToken: string;
  email: string;
}

enum EncryptedStorageKeys {
  USER_SESSION = "userSession",
}

export default {
  saveUserSession: (user: UserSession): Promise<void> => {
    return EncryptedStorage.setItem(
      EncryptedStorageKeys.USER_SESSION,
      JSON.stringify(user)
    );
  },

  loadUserSession: (): Promise<UserSession | null> => {
    return EncryptedStorage.getItem(EncryptedStorageKeys.USER_SESSION).then(
      (userSession: string | null) => {
        // If we are bypassing authentication, we will assume the root user
        if (!userSession && SYSTEM_CONFIGURATION.LOGIN_BYPASS_AUTHENTICATION) {
          return {
            fullName: "Root",
            email: "root@root.ca",
            authenticationToken: "",
          };
        }
        if (!userSession) {
          LoggerService.warn("Loading null user session!");
          return null;
        }

        return JSON.parse(userSession);
      }
    );
  },

  deleteUserSession: (): Promise<void> => {
    return EncryptedStorage.removeItem(EncryptedStorageKeys.USER_SESSION).catch(
      (error: any) => {
        console.log("error occured in deleteUserSession: ", error);
        return;
      }
    );
  },
};
