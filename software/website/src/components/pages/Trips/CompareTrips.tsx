import React, { memo, useEffect, useState, useCallback, useRef } from "react";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import Chart from "components/visualization/Chart";
import Route from "models/Route";
import { toClockString, toDateString } from "util/StringUtil";
import GoogleMap from "components/visualization/GoogleMapWrapper";
import LoadingIcon from "components/icons/LoadingIcon";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import { ColorEnum } from "constants/ColorEnum";
import LabeledText from "./LabeledText";
import { MeasurandUnitMap } from "constants/MeasurandUnitEnum";

const chartLabelStyles = {
  color: "black",
  fontWeight: 700,
  fontSize: "16px",
  marginBottom: "2px",
  marginTop: "15px",
};

const statLabelStyles = {
  marginTop: "3px",
  marginBottom: "3px",
};

const mapStyles = { height: "200px" };

const colWidth = 450;

interface TripsDetailsProps {
  selectedRoutes: Route[];
}

function CompareTrips({ selectedRoutes }: TripsDetailsProps) {
  const [activeMeasurand, setActiveMeasurand] = useState("");
  const [data, setData] = useState([]);
  const [netError, setNetError] = useState(undefined);

  const maps = useRef<Map<string, any>>(new Map());

  // Should open the targeted charts map
  // On further clicks should zoom into the respective map
  const chartClickHandler = useCallback(
    (e: any) => {
      if (e.activePayload[0].dataKey !== activeMeasurand) {
        setActiveMeasurand(e.activePayload[0].dataKey);
      } else if (maps.current.size > 0) {
        const targetedRouteMap = maps.current.get(
          e.activePayload[0].payload.route_id
        );
        targetedRouteMap.panTo({
          lat: e.activePayload[0].payload[DatapointFieldEnum.latitude],
          lng: e.activePayload[0].payload[DatapointFieldEnum.longitude],
        });
        targetedRouteMap.setZoom(15);
      }
    },
    [activeMeasurand]
  );

  useEffect(() => {
    selectedRoutes.forEach((route, i) => {
      fetch(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/routeMeasurementDataPoints/${route.route_id}`,
        {
          headers: getFetchHeaderWithAuth(),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            data.push(result);
            setData([...data]);
          },
          (error) => {
            setNetError(error);
          }
        );
    });
  }, []);

  const _data = data.map((elem) => {
    return elem.map((dp) => {
      return {
        ...dp,
        pressure_pascals: parseFloat((dp.pressure_pascals / 1000).toFixed(2)),
      };
    });
  });

  return (
    <ul
      style={{
        display: "flex",
        width: "calc(100vw - 47px)",
        marginLeft: "5px",
        overflow: "hidden",
        paddingLeft: 0,
      }}
    >
      {selectedRoutes.map((route: Route, i) => {
        return _data[i] !== undefined ? (
          <div
            style={{
              marginLeft: "10px",
              minWidth: `${colWidth}px`,
              flexBasis: "100%",
              marginRight: "10px",
            }}
          >
            <span style={chartLabelStyles}>
              {toDateString(route.start_time_s)}
            </span>
            <p style={{ color: ColorEnum.Black, fontSize: "12px", margin: 0 }}>
              {toClockString(route.start_time_s, route.end_time_s)}
            </p>
            <p style={chartLabelStyles}>Stats</p>
            <div
              style={{
                backgroundColor: ColorEnum.Black,
                padding: "10px",
                borderRadius: "6px",
                display: "grid",
                gridAutoFlow: "column",
                columnGap: "10px",
              }}
            >
              <div>
                <LabeledText
                  label={"Vibration exposure"}
                  text={`${route.total_vibration} ${MeasurandUnitMap.get(
                    DatapointFieldEnum.vibration
                  )}`}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average vibration"}
                  text={`${route.avg_vibration} ${MeasurandUnitMap.get(
                    DatapointFieldEnum.vibration
                  )}`}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average noise"}
                  text={`${route.avg_noise} ${MeasurandUnitMap.get(
                    DatapointFieldEnum.noise_db
                  )}`}
                  style={statLabelStyles}
                />
              </div>
              <div>
                <LabeledText
                  label={"Average temperature"}
                  text={`${route.avg_temperature} ${MeasurandUnitMap.get(
                    DatapointFieldEnum.temperature_celsius
                  )}`}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average speed"}
                  text={`${route.avg_velocity} ${MeasurandUnitMap.get(
                    DatapointFieldEnum.velocity_kmps
                  )}`}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average pressure"}
                  text={`${route.avg_pressure / 1000} ${MeasurandUnitMap.get(
                    DatapointFieldEnum.pressure_pascals
                  )}`}
                  style={statLabelStyles}
                />
              </div>
            </div>
            <p style={chartLabelStyles}>Vibration</p>
            <Chart
              data={_data[i]}
              measurand={DatapointFieldEnum.vibration}
              onClick={chartClickHandler}
            />
            {activeMeasurand === DatapointFieldEnum.vibration && (
              <GoogleMap
                data={_data[i]}
                measurand={DatapointFieldEnum.vibration}
                setMapRef={(map) => {
                  maps.current.set(route.route_id, map);
                }}
                style={mapStyles}
              />
            )}
            <p style={chartLabelStyles}>Noise</p>
            <Chart
              data={_data[i]}
              measurand={DatapointFieldEnum.noise_db}
              onClick={chartClickHandler}
            />
            {activeMeasurand === DatapointFieldEnum.noise_db && (
              <GoogleMap
                data={_data[i]}
                measurand={DatapointFieldEnum.noise_db}
                setMapRef={(map) => {
                  maps.current.set(route.route_id, map);
                }}
                style={mapStyles}
              />
            )}
            <p style={chartLabelStyles}>Temperature</p>
            <Chart
              data={_data[i]}
              measurand={DatapointFieldEnum.temperature_celsius}
              onClick={chartClickHandler}
            />
            {activeMeasurand === DatapointFieldEnum.temperature_celsius && (
              <GoogleMap
                data={data[i]}
                measurand={DatapointFieldEnum.temperature_celsius}
                setMapRef={(map) => {
                  maps.current.set(route.route_id, map);
                }}
                style={mapStyles}
              />
            )}
            <p style={chartLabelStyles}>Speed</p>
            <Chart
              data={_data[i]}
              measurand={DatapointFieldEnum.velocity_kmps}
              onClick={chartClickHandler}
            />
            {activeMeasurand === DatapointFieldEnum.velocity_kmps && (
              <GoogleMap
                data={_data[i]}
                measurand={DatapointFieldEnum.velocity_kmps}
                setMapRef={(map) => {
                  maps.current.set(route.route_id, map);
                }}
                style={mapStyles}
              />
            )}
            <p style={chartLabelStyles}>Pressure</p>
            <Chart
              data={_data[i]}
              measurand={DatapointFieldEnum.pressure_pascals}
              onClick={chartClickHandler}
            />
            {activeMeasurand === DatapointFieldEnum.pressure_pascals && (
              <GoogleMap
                data={_data[i]}
                measurand={DatapointFieldEnum.pressure_pascals}
                setMapRef={(map) => {
                  maps.current.set(route.route_id, map);
                }}
                style={mapStyles}
              />
            )}
          </div>
        ) : (
          <div
            style={{
              width: `${colWidth}px`,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoadingIcon />
          </div>
        );
      })}
    </ul>
  );
}

export default memo(CompareTrips);
