/**
 * Author: Paul Okenne
 * File: LocalTrips
 * Purpose: Exports the local trips components which reveals trips stored in the database
 */
import { useState } from "react";
import { View, Text } from "react-native";
import TripRoute from "../services/database/models/Route";
export default () => {
  const [localTrips, setLocalTrip] = useState<Array<TripRoute>>([]);

  const getLocalTrips = () => {};

  return (
    <View>
      <Text>LocalTrips</Text>
    </View>
  );
};
