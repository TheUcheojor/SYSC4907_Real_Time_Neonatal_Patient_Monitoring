import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { StyleSheet, View, Text } from "react-native";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { MainStackParamList, RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import AppIcon from "../components/AppIcon";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator<MainStackParamList>();

const handleLogOut = (navigation: DrawerNavigationHelpers): void => {
  navigation.navigate("Login");
};

const CustomDrawerMenu = ({
  navigation,
}: {
  navigation: DrawerNavigationHelpers;
}): JSX.Element => {
  return (
    <DrawerContentScrollView>
      <View style={style.header}>
        <AppIcon size={80} />
      </View>

      <DrawerItem
        labelStyle={style.appName}
        label="LOG OUT"
        icon={() => <Ionicons name="exit-outline" size={30} color="black" />}
        onPress={() => handleLogOut(navigation)}
      />
    </DrawerContentScrollView>
  );
};

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerMenu navigation={props.navigation} />
      )}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="BottomTab" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  option: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
  },

  appName: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 20,
    textAlign: "left",
    flexDirection: "row",

    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
});
