import { View, Text, Pressable, TextInput } from "react-native";
import { StyleSheet } from "react-native";

import { TextInputContainer } from "../components/TextInputContainer";
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  APP_NAME,
  EMAIL_PLACEHOLDER,
  EMAIL_TITLE,
  FORGOT_PASSWORD_TEXT,
  NO_ACCOUNT_SIGNUP_TEXT,
  PASSWORD_PLACEHOLDER,
  PASSWORD_TITLE,
  LOGIN_BUTTON_TEXT,
} from "../constants/ViewConstants";
import AppIcon from "../components/AppIcon";
import { ClickableText } from "../components/ClickableText";
import { useState, useRef } from "react";
import { ServerCommnunicationService } from "../services/ServerCommunicationService";
import { BaseServerResponse } from "../services/models/server-communication/requests/BaseServerResponse";
import { isEmail } from "../utils/ValidatorUtil";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";
import SimpleButton from "../components/SimpleButton";
import { SYSTEM_CONFIGURATION } from "../global/SystemConfiguration";

/**
 * The login screen layout
 * @returns
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">): JSX.Element => {
  const [isError, setErrorFlag] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**
   * Authenticate the user
   */
  const login = (): void => {
    // For developers. Bypass authentication for developer purposes.
    // Because expo refreshes the app, tt can become frustrating to login everytime changes are made
    if (SYSTEM_CONFIGURATION.LOGIN_BYPASS_AUTHENTICATION) {
      navigation.navigate("Main", {
        screen: "Paramedic",
      });
      return;
    }

    // If an invalid email is present, do not waste time sending the request
    if (!isEmail(email)) {
      setErrorFlag(true);
      return;
    }

    ServerCommnunicationService.getServerCommunicationService()
      .login({
        email: email.trim().toLowerCase(),
        password: password,
      })
      .then((serverResponse: BaseServerResponse) => {
        if (serverResponse.isSuccessful) {
          setErrorFlag(false);

          setEmail("");
          setPassword("");

          navigation.navigate("Main", {
            screen: "Paramedic",
          });
          return;
        }

        setErrorFlag(true);
      });
  };

  return (
    <View style={styles.container}>
      <AppIcon />
      <Text style={styles.title}>{APP_NAME}</Text>

      <Text style={styles.errorText}>
        {isError && "The entered email or password is incorrect."}
      </Text>

      <TextInputContainer
        title={EMAIL_TITLE}
        placeholder={EMAIL_PLACEHOLDER}
        isError={isError}
        textInput={email}
        setTextInput={setEmail}
      />
      <TextInputContainer
        title={PASSWORD_TITLE}
        placeholder={PASSWORD_PLACEHOLDER}
        isError={isError}
        secureTextEntry={true}
        textInput={password}
        setTextInput={setPassword}
      />

      <ClickableText
        text={NO_ACCOUNT_SIGNUP_TEXT}
        nextPage="Signup"
        navigation={navigation}
      />
      <ClickableText
        text={FORGOT_PASSWORD_TEXT}
        nextPage="ForgotPassword"
        navigation={navigation}
      />

      <SimpleButton onPressFunction={login} text={LOGIN_BUTTON_TEXT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 16,
    backgroundColor: "white",
  },

  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 48,
    textAlign: "center",
    lineHeight: 60,
    letterSpacing: 10,
    marginBottom: 20,
  },

  errorText: {
    // mo: 5,/
    fontSize: 15,
    fontFamily: "Montserrat_500Medium",
    color: "#C2372E",
  },

  buttonContainer: {
    width: 300,
    borderRadius: 10,
    backgroundColor: "black",
    padding: 20,
    marginVertical: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    paddingVertical: 5,
    letterSpacing: 2,
  },
});
