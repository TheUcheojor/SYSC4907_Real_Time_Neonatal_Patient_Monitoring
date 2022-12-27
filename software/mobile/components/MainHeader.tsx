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
import { FontAwesome } from "@expo/vector-icons";

export default ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, any> | any) => {
  const openDrawer = (): void => {
    navigation.openDrawer();
  };

  return (
    <View style={style.headerContainer}>
      <Pressable
        style={style.logoContainer}
        onPress={() => navigation.navigate("Driver")}
      >
        <AppIcon size={30} />
        <Text style={style.appNameText}>TCA</Text>
      </Pressable>

      <Pressable style={style.usernameContainer} onPress={openDrawer}>
        <Text style={style.usernameText}>Username</Text>
        <FontAwesome name="user-circle-o" size={30} color="black" />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    width: APP_WIDTH - 25,
    flexDirection: "row",
    alignItems: "center",
  },

  logoContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  },

  appNameText: {
    padding: 5,
    paddingLeft: 10,
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
  },

  usernameContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignContent: "center",
    flex: 2,
  },

  usernameText: {
    fontFamily: "Montserrat_500Medium",
    padding: 5,

    fontSize: 15,
  },
});
