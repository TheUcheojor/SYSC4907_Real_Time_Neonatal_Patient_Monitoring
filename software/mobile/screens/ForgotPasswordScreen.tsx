import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";
import AppIcon from "../components/AppIcon";
import { RootStackParamList } from "../types";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  APP_NAME,
  EMAIL_PLACEHOLDER,
  EMAIL_TITLE,
  FORGOT_PASSWORD_HEADER,
  RETURN_TO_LOGIN_TEXT,
  SEND_TEMPORARY_PASSOWRD_BUTTON_TEXT as SEND_TEMPORARY_PASSWORD_BUTTON_TEXT,
} from "../constants/ViewConstants";
import { TextInputContainer } from "../components/TextInputContainer";
import { ClickableText } from "../components/ClickableText";
import { ServerCommnunicationService } from "../services/ServerCommunicationService";
import { BaseServerResponse } from "../services/models/server-communication/requests/BaseServerResponse";

/**
 * The period in which the forgot password message will be remain
 */
const TEMPORARY_MESSAGE_TIMEOUT = 2000;

/**
 * The forgot-password screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>): JSX.Element => {
  const [hasSentTemporaryPassword, setSentTemporaryPassword] =
    useState<boolean>(false);

  const [email, setEmail] = useState<string>("");

  const forgotPassword = () => {
    console.log("hasSentTemporaryPassword: ", hasSentTemporaryPassword);

    ServerCommnunicationService.getServerCommunicationService()
      .forgotPassword({
        email: email.trim().toLowerCase(),
      })
      .then((response: BaseServerResponse) => {
        if (response.isSuccessful) {
          setSentTemporaryPassword(true);

          const temporaryMessage = setTimeout(() => {
            setSentTemporaryPassword(false);
          }, TEMPORARY_MESSAGE_TIMEOUT);
        }
      });
  };

  return (
    <View style={styles.container}>
      <AppIcon size={undefined} />

      <Text style={styles.title}>{APP_NAME}</Text>

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{FORGOT_PASSWORD_HEADER}</Text>
      </View>

      <TextInputContainer
        width={275}
        title={EMAIL_TITLE}
        placeholder={EMAIL_PLACEHOLDER}
        textInput={email}
        setTextInput={setEmail}
      />

      <Text style={styles.message}>
        {hasSentTemporaryPassword && "Your temporary password has been sent"}
      </Text>

      <Pressable style={styles.buttonContainer} onPress={forgotPassword}>
        <Text style={styles.buttonText}>
          {SEND_TEMPORARY_PASSWORD_BUTTON_TEXT}
        </Text>
      </Pressable>

      {/* Should be a clickable text */}
      <ClickableText
        text={RETURN_TO_LOGIN_TEXT}
        nextPage="Login"
        navigation={navigation}
        version={2}
      />
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
    marginBottom: 15,
  },

  subtitleContainer: {
    alignItems: "flex-start",
    width: 275,
  },

  subtitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    marginTop: 15,
  },

  buttonContainer: {
    width: 275,
    borderRadius: 10,
    backgroundColor: "black",
    padding: 10,
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

  message: {
    fontFamily: "Montserrat_700Bold",
    color: "#2DB021",

    fontSize: 15,
    padding: 10,
  },
});
