import { View, Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { TextInputContainer } from "../components/TextInputContainer";
import { RootStackParamList } from "../types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  APP_ICON,
  BLACK_COLOR,
  EMAIL_PLACEHOLDER,
  EMAIL_TITLE,
  PASSWORD_PLACEHOLDER,
  PASSWORD_TITLE,
} from "../constants/ViewConstants";

/**
 * The login screen layout
 * @returns
 */
export default ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Login">): JSX.Element => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={APP_ICON} size={100} color={BLACK_COLOR} />
      <Text style={styles.title}>Transport Comfort Analysis</Text>

      <TextInputContainer title={EMAIL_TITLE} placeholder={EMAIL_PLACEHOLDER} />
      <TextInputContainer
        title={PASSWORD_TITLE}
        placeholder={PASSWORD_PLACEHOLDER}
      />

      <ClickableText text="No account? Signup here" />
      <ClickableText text="Forgot password?" />

      <Pressable
        style={styles.buttonContainer}
        onPress={() =>
          navigation.navigate("Main", {
            screen: "Paramedic",
          })
        }
      >
        <Text style={styles.buttonText}> LOGIN </Text>
      </Pressable>
    </View>
  );
};

/**
 * Text that can be clicked
 * @param text the text
 * @returns
 */
const ClickableText = ({ text }: { text: string }) => (
  <Pressable style={styles.clickableTextContainer}>
    <Text style={styles.clickableText}> {text} </Text>
  </Pressable>
);

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
