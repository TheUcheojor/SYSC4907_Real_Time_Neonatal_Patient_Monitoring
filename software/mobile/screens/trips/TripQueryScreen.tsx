/**
 * Author: Paul Okenne
 * File: TripQueryScreen
 * Purpose: Exports the trip query screen
 */

import { View, Text, StyleSheet } from "react-native";
export default (): JSX.Element => {
  return (
    <View style={styles.tripQueryScreen}>
      <Text>This is the Trip Query Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tripQueryScreen: {
    flex: 1,
    backgroundColor: "white",
  },
});
