/**
 * Author: Paul Okenne
 * File: MainHeader
 * Purpose: Exports the main header component
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { APP_WIDTH } from "../constants/ViewConstants";
import { MainStackParamList } from "../types";
import AppIcon from "./AppIcon";

export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, any> | any) => {
  return (
    <View style={style.headerContainer}>
      <Pressable onPress={() => navigation.navigate("Driver")}>
        <View style={style.logoContainer}>
          <AppIcon size={30} />
          <Text style={style.appNameText}>TCA</Text>
        </View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    // flex: 1,
    width: APP_WIDTH - 50,
    height: "100%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "blue",
  },

  logoContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    // textAlign: "center",
  },

  appNameText: {
    padding: 5,
    paddingLeft: 10,
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },
});
