import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { MainStackParamList } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "../screens/SettingsScreen";
import TripsScreen from "../screens/TripsScreen";
import ParamedicScreen from "../screens/ParamedicScreen";
import DriverScreen from "../screens/DriverScreen";

import MenuItemContainer from "../components/MenuItemContainer";
import MainHeader from "../components/MainHeader";
import { RouteProp } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator<MainStackParamList>();

/**
 * The main navigation containing only core screens accessible through
 * authenication
 */
export default () => (
  <BottomTab.Navigator
    initialRouteName="Paramedic"
    screenOptions={({ navigation }: { navigation: any }) => ({
      headerTitle: () => <MainHeader navigation={navigation} />,
      // header: (navigation ) => <MainHeader {...navigation}} />,
      // headerStatusBarHeight: 50,
      headerStyle: {
        // borderStartWidth: 1,
        // bo/r,
      },
      headerShown: true,
      tabBarShowLabel: false,
      tabBarStyle: styles.menuContainer,
    })}
  >
    <BottomTab.Screen
      name="Driver"
      component={DriverScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Driver" focused={focused} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Paramedic"
      component={ParamedicScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Paramedic" focused={focused} />
        ),
      }}
    />

    <BottomTab.Screen
      name="Trips"
      component={TripsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Trips" focused={focused} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MenuItemContainer screenName="Settings" focused={focused} />
        ),
      }}
    />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "black",
    height: 110,
  },
});
