/**
 * File: SignupScreen
 * Author: Paul Okenne
 * Purpose: Returns the signup screen component
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AppIcon from "../components/AppIcon";
import { ClickableText } from "../components/ClickableText";
import SimpleButton from "../components/SimpleButton";
import { TextInputContainer } from "../components/TextInputContainer";
import { Color } from "../constants/ColorEnum";
import {
  APP_NAME,
  EMAIL_PLACEHOLDER,
  EMAIL_TITLE,
  PASSWORD_PLACEHOLDER,
  PASSWORD_TITLE,
  RETURN_TO_LOGIN_TEXT,
} from "../constants/ViewConstants";
import { BaseServerResponse } from "../services/models/server-communication/requests/BaseServerResponse";
import { ServerCommnunicationService } from "../services/ServerCommunicationService";
import { RootStackParamList } from "../types";
import {
  isEmail,
  isValidFullName,
  isValidPassword,
} from "../utils/ValidatorUtil";

/**
 * The signup screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Signup">): JSX.Element => {
  const [isError, setErrorFlag] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = () => {
    // Validate the input values
    if (!isEmail(email)) {
      setErrorMessage("Enter a valid email");
      return;
    }

    if (!isValidFullName(fullName)) {
      setErrorMessage("Your full name must be greater than 3 characters");
      return;
    }

    if (!isValidPassword(password)) {
      setErrorMessage(
        "Password must be at least 7 characters with capital and lowercase letters"
      );
      return;
    }

    setErrorMessage("");

    /**
     * Sign up using the user
     */
    ServerCommnunicationService.getServerCommunicationService()
      .signUp({
        email: email,
        full_name: fullName,
        password: password,
      })
      .then(({ isSuccessful }: BaseServerResponse) => {
        if (isSuccessful) {
          navigation.navigate("Main", {
            screen: "Paramedic",
          });
        } else {
          setErrorMessage("Sign-up process failed");
        }
      });
  };
  return (
    <View style={styles.container}>
      <AppIcon />
      <Text style={styles.title}>{APP_NAME}</Text>
      <Text style={styles.primary}> Sign-up</Text>

      <View style={styles.errorContainer}>
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>

      <TextInputContainer
        title={EMAIL_TITLE}
        placeholder={EMAIL_PLACEHOLDER}
        isError={isError}
        textInput={email}
        setTextInput={setEmail}
      />

      <TextInputContainer
        title={"Full Name"}
        placeholder={"Enter your full name..."}
        isError={isError}
        textInput={fullName}
        setTextInput={setFullName}
      />

      <TextInputContainer
        title={PASSWORD_TITLE}
        placeholder={PASSWORD_PLACEHOLDER}
        isError={isError}
        textInput={password}
        secureTextEntry={true}
        setTextInput={setPassword}
      />

      <SimpleButton onPressFunction={signup} text="Sign up" />

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
    marginBottom: 20,
  },
  primary: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    textAlign: "center",
  },
  error: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
    textAlign: "center",
    color: Color.RED,
  },
  errorContainer: {
    marginTop: 10,
    marginBottom: 0,
  },
});
