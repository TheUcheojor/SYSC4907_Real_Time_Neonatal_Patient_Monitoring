import React from "react";
import {
  GoogleMap,
  useGoogleMap,
  useJsApiLoader,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { routeMeasurementDataPoints } from "mock/mockTrip";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Scatter,
  Tooltip,
  Dot,
} from "recharts";

const red = "#FF0000";
const yellow = "#f5d742";
const green = "#00FF00";

const containerStyle = {
  width: "400px",
  height: "400px",
};

function getColor(velocity: number): string {
  if (velocity > 26) {
    return red;
  } else if (velocity > 24) {
    return yellow;
  } else {
    return green;
  }
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>{`reading : ${payload[0].payload.temperature}`}</p>
        {payload[0].payload.annotation !== "" ? (
          <p>{`annotation : ${payload[0].payload.annotation}`}</p>
        ) : (
          ""
        )}
      </div>
    );
  }

  return null;
};

const RenderDot = ({ cx, cy }: any) => {
  return <Dot cx={cx} cy={cy} fill={yellow} r={3} />;
};

const data = [];

routeMeasurementDataPoints.forEach((dp) => {
  data.push({
    name: dp.time,
    temperature: dp.temperature,
    annotationPos: dp.annotation !== "" ? dp.temperature : undefined,
    annotation: dp.annotation,
    lon: dp.coordinates[0],
    lat: dp.coordinates[1],
  });
});

function TripsPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: ["geometry", "drawing"],
  });

  let map;
  const onLoad = React.useCallback(function onLoad(mapInstance) {
    map = mapInstance;
  }, []);
  const chartClickHandler = (data: any, i: number) => {
    console.log(data, i);
    map.panTo();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span
        style={{ marginBottom: "10px", textAlign: "center", fontWeight: 700 }}
      >
        Temperature
      </span>
      <div
        style={{
          marginLeft: "10px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#000",
          borderRadius: "6px",
        }}
      >
        <ComposedChart
          width={400}
          height={200}
          data={data}
          margin={{ right: 20, top: 20 }}
          onClick={chartClickHandler}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#0E9CFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0E9CFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <title>Temperature</title>
          <XAxis
            dataKey="name"
            tick={{ fill: "white" }}
            tickLine={{ stroke: "white" }}
          />
          <YAxis
            unit="C"
            tick={{ fill: "white" }}
            tickLine={{ stroke: "white" }}
          />
          <CartesianGrid stroke="#fff" strokeDasharray="1 4" />
          <Area
            type="monotone"
            dataKey="temperature"
            fill="url(#colorUv)"
            stroke="url(#colorUv)"
            fillOpacity={0.7}
          />
          <Tooltip content={<CustomTooltip />} />
          <Scatter
            dataKey="annotationPos"
            fill="#f5d742"
            shape={<RenderDot />}
          ></Scatter>
        </ComposedChart>
      </div>
      isLoaded && (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: routeMeasurementDataPoints[0].coordinates[1],
            lng: routeMeasurementDataPoints[0].coordinates[0],
          }}
          onLoad={onLoad}
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
      </div>
      );
    </div>
  );
}

export default TripsPage;
