import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  CircleF,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { routeMeasurementDataPoints } from "mock/mockTrip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const red = "#FF0000";
const yellow = "#f5d742";
const green = "#00FF00";

function getColor(velocity: number): string {
  if (velocity > 26) {
    return red;
  } else if (velocity > 24) {
    return yellow;
  } else {
    return green;
  }
}

const containerStyle = {
  width: "400px",
  height: "400px",
};

const circleOptions = {
  strokeOpacity: 0.9,
  strokeWeight: 2,
  fillOpacity: 0.8,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 3,
  zIndex: 1,
};

const data = [];

routeMeasurementDataPoints.forEach((dp) => {
  data.push({ name: dp.time, temperature: dp.temperature });
});

function TripsPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: ["geometry", "drawing"],
  });

  return (
    isLoaded && (
      <div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: routeMeasurementDataPoints[0].coordinates[1],
            lng: routeMeasurementDataPoints[0].coordinates[0],
          }}
          zoom={17}
        >
          <MarkerF
            label="S"
            position={{
              lat: routeMeasurementDataPoints[0].coordinates[1],
              lng: routeMeasurementDataPoints[0].coordinates[0],
            }}
          />
          <MarkerF
            label="F"
            position={{
              lat: routeMeasurementDataPoints[
                routeMeasurementDataPoints.length - 1
              ].coordinates[1],
              lng: routeMeasurementDataPoints[
                routeMeasurementDataPoints.length - 1
              ].coordinates[0],
            }}
          />
          {routeMeasurementDataPoints.map((dp, i) => {
            if (i !== 0 && i !== routeMeasurementDataPoints.length - 1) {
              return (
                <CircleF
                  center={{
                    lat: dp.coordinates[1],
                    lng: dp.coordinates[0],
                  }}
                  options={{
                    strokeColor: getColor(dp.temperature),
                    fillColor: getColor(dp.temperature),
                    ...circleOptions,
                  }}
                />
              );
            }
          })}
        </GoogleMap>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: routeMeasurementDataPoints[0].coordinates[1],
            lng: routeMeasurementDataPoints[0].coordinates[0],
          }}
          zoom={17}
        >
          <MarkerF
            label="S"
            position={{
              lat: routeMeasurementDataPoints[0].coordinates[1],
              lng: routeMeasurementDataPoints[0].coordinates[0],
            }}
          />
          <MarkerF
            label="F"
            position={{
              lat: routeMeasurementDataPoints[
                routeMeasurementDataPoints.length - 1
              ].coordinates[1],
              lng: routeMeasurementDataPoints[
                routeMeasurementDataPoints.length - 1
              ].coordinates[0],
            }}
          />
          {routeMeasurementDataPoints.map((dp, i) => {
            if (i !== routeMeasurementDataPoints.length - 1) {
              return (
                <PolylineF
                  path={[
                    {
                      lat: dp.coordinates[1],
                      lng: dp.coordinates[0],
                    },
                    {
                      lat: routeMeasurementDataPoints[i + 1].coordinates[1],
                      lng: routeMeasurementDataPoints[i + 1].coordinates[0],
                    },
                  ]}
                  options={{
                    geodesic: true,
                    strokeColor: getColor(dp.temperature),
                    strokeWeight: 8,
                    strokeOpacity: 0.6,
                  }}
                />
              );
            }
          })}
        </GoogleMap>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </div>
    )
  );
}

export default TripsPage;
