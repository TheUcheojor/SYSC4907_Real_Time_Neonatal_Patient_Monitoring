import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AppIcon from "../components/AppIcon";
import SimpleButton from "../components/SimpleButton";
import { TextInputContainer } from "../components/TextInputContainer";
import {
  APP_NAME,
  EMAIL_PLACEHOLDER,
  EMAIL_TITLE,
  PASSWORD_PLACEHOLDER,
  PASSWORD_TITLE,
} from "../constants/ViewConstants";
import { RootStackParamList } from "../types";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";

/**
 * The signup screen
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Signup">): JSX.Element => {
  const [isError, setErrorFlag] = useState<boolean>(false);

  const emailRef = useRef<string>("");
  const fullNameRef = useRef<string>("");
  const passwordRef = useRef<string>("");

  const signup = () => {};
  return (
    <View style={styles.container}>
      <AppIcon />
      <Text style={styles.title}>{APP_NAME}</Text>
      <Text style={styles.primary}> Sign-up</Text>

      <TextInputContainer
        inputRef={emailRef}
        title={EMAIL_TITLE}
        placeholder={EMAIL_PLACEHOLDER}
        isError={isError}
      />

      <TextInputContainer
        inputRef={fullNameRef}
        title={"Full Name"}
        placeholder={"Enter your full name..."}
        isError={isError}
      />

      <TextInputContainer
        inputRef={passwordRef}
        title={PASSWORD_TITLE}
        placeholder={PASSWORD_PLACEHOLDER}
        isError={isError}
      />

      <SimpleButton onPressFunction={signup} text="Sign up" />
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
});
