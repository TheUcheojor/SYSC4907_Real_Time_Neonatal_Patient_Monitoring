/**
 * Author: Paul Okenne
 * File: ClickableText.tsx
 * Purpose: Exports the clickable text component
 */

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types";

export const ClickableText = ({
  text,
  nextPage,
  navigation,
  version = 1,
}: {
  text: string;
  nextPage: keyof RootStackParamList;
  navigation: NativeStackNavigationProp<RootStackParamList, any, undefined>;
  version?: number;
}) => (
  <Pressable
    style={
      version == 1
        ? styles.clickableTextContainer
        : styles.clickableTextContainer_v2
    }
    onPress={() => navigation.navigate(nextPage as any)}
  >
    <Text style={version == 1 ? styles.clickableText : styles.clickableText_v2}>
      {text}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
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
  clickableTextContainer_v2: {
    marginTop: 20,
    width: 300,
    marginVertical: 5,
  },

  clickableText_v2: {
    color: "black",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 15,
    fontFamily: "Montserrat_700Bold",
  },
});
