import { View, Text, TextInput, Pressable } from "react-native";
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

/**
 * The login screen layout
 * @returns
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">): JSX.Element => {
  const ClickableText = ({
    text,
    nextPage,
  }: {
    text: string;
    nextPage: keyof RootStackParamList;
  }) => (
    <Pressable
      style={styles.clickableTextContainer}
      onPress={() => navigation.navigate(nextPage as any)}
    >
      <Text style={styles.clickableText}> {text} </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <AppIcon size={undefined} />
      <Text style={styles.title}>{APP_NAME}</Text>

      <TextInputContainer title={EMAIL_TITLE} placeholder={EMAIL_PLACEHOLDER} />
      <TextInputContainer
        title={PASSWORD_TITLE}
        placeholder={PASSWORD_PLACEHOLDER}
      />

      <ClickableText text={NO_ACCOUNT_SIGNUP_TEXT} nextPage="Signup" />
      <ClickableText text={FORGOT_PASSWORD_TEXT} nextPage="ForgotPassword" />

      <Pressable
        style={styles.buttonContainer}
        onPress={() =>
          navigation.navigate("Main", {
            screen: "Paramedic",
          })
        }
      >
        <Text style={styles.buttonText}> {LOGIN_BUTTON_TEXT} </Text>
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

  clickableTextContainer: {
    width: 300,
    flexDirection: "row",
    alignContent: "flex-start",
    textAlign: "left",
    marginVertical: 5,
  },

  clickableText: {
    color: "#879AFF",
    textAlign: "left",
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
  },
});
