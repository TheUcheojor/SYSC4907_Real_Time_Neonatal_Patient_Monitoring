/**
 * Author: Paul Okenne
 * File: UserSessionService
 * Purpose: Exports functions for managing user sessions
 */
import EncryptedStorage from "react-native-encrypted-storage";

export interface UserSession {
  fullName: string;
  authenticationToken: string;
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
        if (!userSession) return null;

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
