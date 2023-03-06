/**
 * Author: Paul Okenne
 * File: SimpleButton
 * Purpose: Exports a simple buttton
 */

import { Pressable, Text, StyleSheet } from "react-native";
import { getPressedHighlightBehaviourStyle } from "../utils/ComponentsUtil";

const DEFAULT_ON_PRESS_COLOR: string = "#1E1E1E";

type SimpleButtonParams = {
  onPressedButtonColour?: string;
  buttonContainerStyle?: {};
  buttonTextStyle?: {};
  onPressFunction: () => void;
  text?: string;
};

export default ({
  onPressedButtonColour,
  buttonContainerStyle,
  buttonTextStyle,
  onPressFunction,
  text,
}: SimpleButtonParams) => {
  return (
    <Pressable
      style={({ pressed }: { pressed: boolean }) =>
        getPressedHighlightBehaviourStyle(
          pressed,
          buttonContainerStyle ? buttonContainerStyle : styles.buttonContainer,
          onPressedButtonColour ? onPressedButtonColour : DEFAULT_ON_PRESS_COLOR
        )
      }
      onPress={onPressFunction}
    >
      <Text style={styles.buttonText ? styles.buttonText : buttonTextStyle}>
        {text ? text : ""}
      </Text>
    </Pressable>
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
