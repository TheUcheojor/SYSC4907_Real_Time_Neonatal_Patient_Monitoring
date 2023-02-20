/**
 * Author: Paul
 * File: Map
 * Purpose: Exports the Map component and relevant models
 *
 */

import { View, StyleSheet } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE, Circle } from "react-native-maps";
import RouteMeasurementDataPoint from "../services/models/trips/RouteMeasurementDataPoint";
import { Color } from "../constants/ColorEnum";
import { NumericMetricMeasurementPacketKey } from "../services/models/sensor-package-communication/MeasurementPacket";
import { MetricThreshold } from "../constants/metric-constants";

interface MapParams {
  routeMeasurementDataPoints: RouteMeasurementDataPoint[];
  metricThreshold: MetricThreshold;
  metricKey: NumericMetricMeasurementPacketKey;
}

//The map line width
const LINE_SIZE = 5;

/**
 * Returns the map colour given a value and its threshols
 * @param value
 * @param lowToMeduimThreshold
 * @param mediumToHighThreshold
 * @returns
 */
const getMapColour = (
  value: number,
  metricThreshold: MetricThreshold
): string => {
  if (value > metricThreshold.mediumToHighThreshold) {
    return Color.RED;
  }
  if (value > metricThreshold.lowToMeduimThreshold) {
    return Color.YELLOW;
  }

  return Color.GREEN;
};

/**
 * The Map Component
 */
export default ({
  routeMeasurementDataPoints,
  metricThreshold,
  metricKey,
}: MapParams) => {
  if (routeMeasurementDataPoints.length == 0) return <></>;

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: routeMeasurementDataPoints[0].location.latitude,
          longitude: routeMeasurementDataPoints[0].location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {routeMeasurementDataPoints
          .slice(0, routeMeasurementDataPoints.length - 2)
          .map(
            (
              routeMeasurementDataPoint: RouteMeasurementDataPoint,
              index: number
            ) => {
              return (
                <Polyline
                  coordinates={[
                    {
                      latitude:
                        routeMeasurementDataPoints[index].location.latitude,
                      longitude:
                        routeMeasurementDataPoints[index].location.longitude,
                    },
                    {
                      latitude:
                        routeMeasurementDataPoints[index + 1].location.latitude,
                      longitude:
                        routeMeasurementDataPoints[index + 1].location
                          .longitude,
                    },
                  ]}
                  strokeWidth={LINE_SIZE}
                  strokeColor={getMapColour(
                    routeMeasurementDataPoints[index][metricKey],
                    metricThreshold
                  )}
                />
              );
            }
          )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },

  map: {
    width: "100%",
    height: 200,
  },
});
