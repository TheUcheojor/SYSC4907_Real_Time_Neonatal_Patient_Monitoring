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
import { BaseServerResponse } from "../services/models/server-communication/ServerResponses";
import { isEmail } from "../utils/ValidatorUtil";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";

/**
 * The login screen layout
 * @returns
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">): JSX.Element => {
  const [isError, setErrorFlag] = useState<boolean>(false);

  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");

  /**
   * Authenticate the user
   */
  const login = (): void => {
    navigation.navigate("Main", {
      screen: "Paramedic",
    });
    return;

    // If an invalid email is present, do not waste time sending the request
    if (!isEmail(emailRef.current)) {
      setErrorFlag(true);
      return;
    }

    ServerCommnunicationService.getServerCommunicationService()
      .login({
        email: emailRef.current,
        password: passwordRef.current,
      })
      .then((serverResponse: BaseServerResponse) => {
        console.log(serverResponse);
        if (serverResponse.isSuccessful) {
          setErrorFlag(false);
          navigation.navigate("Main", {
            screen: "Paramedic",
          });
          return;
        }

        setErrorFlag(true);
      });

    // setErrorFlag((isError) => !isError);
  };

  return (
    <View style={styles.container}>
      <AppIcon size={undefined} />
      <Text style={styles.title}>{APP_NAME}</Text>

      <Text style={styles.errorText}>
        {isError && "The entered email or password is incorrect."}
      </Text>

      <TextInputContainer
        inputRef={emailRef}
        title={EMAIL_TITLE}
        placeholder={EMAIL_PLACEHOLDER}
        isError={isError}
      />
      <TextInputContainer
        inputRef={passwordRef}
        title={PASSWORD_TITLE}
        placeholder={PASSWORD_PLACEHOLDER}
        isError={isError}
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

      <Pressable
        style={({ pressed }: { pressed: boolean }) =>
          getPressedHighlightBehaviourStyle(
            pressed,
            styles.buttonContainer,
            onPressedButtonColour
          )
        }
        onPress={login}
      >
        <Text style={styles.buttonText}> {LOGIN_BUTTON_TEXT} </Text>
      </Pressable>
    </View>
  );
};

const onPressedButtonColour: string = "#1E1E1E";

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
