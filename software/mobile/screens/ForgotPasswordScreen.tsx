import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";
import LargeAppIcon from "../components/LargeAppIcon";
import { RootStackParamList } from "../types";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  APP_NAME,
  EMAIL_PLACEHOLDER,
  EMAIL_TITLE,
  FORGOT_PASSWORD_HEADER,
  SEND_TEMPORARY_PASSOWRD_BUTTON_TEXT,
} from "../constants/ViewConstants";
import { TextInputContainer } from "../components/TextInputContainer";

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
    useState<boolean>(true);

  return (
    <View style={styles.container}>
      <LargeAppIcon />

      <Text style={styles.title}>{APP_NAME}</Text>

      {hasSentTemporaryPassword ? (
        <></>
      ) : (
        <Text style={styles.message}>
          Your temporary password has been sent
        </Text>
      )}

      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{FORGOT_PASSWORD_HEADER}</Text>
      </View>

      <TextInputContainer
        width={275}
        title={EMAIL_TITLE}
        placeholder={EMAIL_PLACEHOLDER}
      />

      <Pressable
        style={styles.buttonContainer}
        onPress={() => setSentTemporaryPassword(!hasSentTemporaryPassword)}
      >
        <Text style={styles.buttonText}>
          {SEND_TEMPORARY_PASSOWRD_BUTTON_TEXT}
        </Text>
      </Pressable>

      <Pressable
        style={styles.clickableTextContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.clickableText}> Return To Login </Text>
      </Pressable>
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

  clickableTextContainer: {
    marginTop: 20,
    width: 300,
    marginVertical: 5,
  },

  clickableText: {
    color: "black",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 15,
    fontFamily: "Montserrat_700Bold",
  },

  message: {
    fontFamily: "Montserrat_700Bold",
    color: "#2DB021",

    fontSize: 15,
    padding: 10,
  },
});
