import React, { memo, useEffect, useState, useCallback } from "react";
import {
  DatapointFieldEnum,
  RouteFieldEnum,
} from "constants/DatapointFieldEnum";
import Chart from "components/visualization/Chart";
import Route from "models/Route";
import { toClockString, toDateString } from "util/StringUtil";
import Map from "components/visualization/Map";
import LoadingIcon from "components/icons/LoadingIcon";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import { ColorEnum } from "constants/ColorEnum";
import LabeledText from "./LabeledText";
import { MeasurandUnitMap } from "constants/MeasurandUnitEnum";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";

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

interface TripsDetailsProps {
  selectedRoutes: Route[];
}

function TripsDetails({ selectedRoutes }: TripsDetailsProps) {
  const [activeMeasurand, setActiveMeasurand] = useState("");
  const [data, setData] = useState([]);
  const [netError, setNetError] = useState(undefined);

  const chartClickHandler = useCallback((e: any) => {
    setActiveMeasurand(e.activePayload[0].dataKey);
  }, []);

  useEffect(() => {
    selectedRoutes.forEach((route, i) => {
      fetch(
        `http://${SERVER_HOST}:${SERVER_PORT}/routeMeasurementDataPoints/${
          route[RouteFieldEnum.route_id]
        }`,
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

  const colWidth = 450;

  const mapStyles = { height: "200px" };

  return (
    <ul
      style={{
        display: "flex",
        width: "calc(100vw - 47px)",
        marginLeft: "5px",
        marginRight: "5px",
        overflow: "hidden",
        paddingLeft: 0,
      }}
    >
      {selectedRoutes.map((route, i) => {
        return _data[i] !== undefined ? (
          <div
            style={{
              marginLeft: "10px",
              minWidth: `${colWidth}px`,
              flexBasis: "100%",
            }}
          >
            <span style={chartLabelStyles}>
              {toDateString(route[RouteFieldEnum.start_time_s])}
            </span>
            <p style={{ color: ColorEnum.Black, fontSize: "12px", margin: 0 }}>
              {toClockString(
                route[RouteFieldEnum.start_time_s],
                route[RouteFieldEnum.end_time_s]
              )}
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
                  text={`${route.total_vibration}`}
                  unit={MeasurandUnitMap.get(DatapointFieldEnum.vibration)}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average vibration"}
                  text={`${route.avg_vibration}`}
                  unit={MeasurandUnitMap.get(DatapointFieldEnum.vibration)}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average noise"}
                  text={`${route.avg_noise}`}
                  unit={MeasurandUnitMap.get(DatapointFieldEnum.noise_db)}
                  style={statLabelStyles}
                />
              </div>
              <div>
                <LabeledText
                  label={"Average temperature"}
                  text={`${route.avg_temperature}`}
                  unit={MeasurandUnitMap.get(
                    DatapointFieldEnum.temperature_celsius
                  )}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average speed"}
                  text={`${route.avg_velocity}`}
                  unit={MeasurandUnitMap.get(DatapointFieldEnum.velocity_kmps)}
                  style={statLabelStyles}
                />
                <LabeledText
                  label={"Average pressure"}
                  text={`${route.avg_pressure / 1000}`}
                  unit={MeasurandUnitMap.get(
                    DatapointFieldEnum.pressure_pascals
                  )}
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
              <Map
                data={_data[i]}
                measurand={DatapointFieldEnum.vibration}
                setMapRef={() => {}}
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
              <Map
                data={_data[i]}
                measurand={DatapointFieldEnum.noise_db}
                setMapRef={() => {}}
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
              <Map
                data={data[i]}
                measurand={DatapointFieldEnum.temperature_celsius}
                setMapRef={() => {}}
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
              <Map
                data={_data[i]}
                measurand={DatapointFieldEnum.velocity_kmps}
                setMapRef={() => {}}
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
              <Map
                data={_data[i]}
                measurand={DatapointFieldEnum.pressure_pascals}
                setMapRef={() => {}}
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

export default memo(TripsDetails);
