import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { MainStackParamList } from "../types";

/**
 * The container for a menu item
 */
export default ({
  screenName,
  focused,
}: {
  screenName: keyof MainStackParamList;
  focused: boolean;
}): JSX.Element => {
  // Maps menu item to corresponding icon
  const MenuItemIconMapping = new Map<keyof MainStackParamList, JSX.Element>([
    [
      "Driver",
      <Image
        source={require("../assets/images/driver.png")}
        style={styles.menuIcon}
      />,
    ],
    [
      "Paramedic",
      <Image
        source={require("../assets/images/paramedic.png")}
        style={styles.menuIcon}
      />,
    ],
    ["Settings", <Ionicons name="settings-sharp" size={25} color="white" />],
    ["Trips", <FontAwesome name="list-ul" size={25} color="white" />],
  ]);

  return (
    <View style={styles.menuItemContainer}>
      {focused ? (
        <FontAwesome
          name="circle"
          size={10}
          color="white"
          style={{
            width: 10,
            height: 10,
            position: "absolute",
            top: -13,
          }}
        />
      ) : (
        <></>
      )}
      {MenuItemIconMapping.get(screenName)}
      <Text style={styles.menuItemText}>{screenName.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  menuItemText: {
    marginVertical: 5,
    color: "white",
    fontFamily: "Montserrat_700Bold",
    fontSize: 10,
  },

  menuIcon: {
    tintColor: "white",
    width: 30,
    height: 30,
  },
});
