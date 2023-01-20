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
}: {
  text: string;
  nextPage: keyof RootStackParamList;
  navigation: NativeStackNavigationProp<RootStackParamList, any, undefined>;
}) => (
  <Pressable
    style={styles.clickableTextContainer}
    onPress={() => navigation.navigate(nextPage as any)}
  >
    <Text style={styles.clickableText}> {text} </Text>
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
});
