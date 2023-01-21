import React, { memo, useEffect, useState, useCallback } from "react";
import {
  DatapointFieldEnum,
  RouteFieldEnum,
} from "constants/DatapointFieldEnum";
import Chart from "components/visualization/Chart";
import Modal from "components/modal/Modal";
import Route from "models/Route";
import { toClockString, toDateString } from "utility/StringUtil";
import { queryTripDatapoints } from "interface/TripsInterface";
import MapWithChartNet from "components/MapWithChartNet";
import Map from "components/Map";
import LoadingIcon from "components/icons/LoadingIcon";
import MapWithChart from "components/visualization/MapWithChart";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import { ColorEnum } from "constants/ColorEnum";
import LabeledText from "./LabeledText";
import { MeasurandUnitEnum } from "constants/MeasurandUnitEnum";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMeasurand, setActiveMeasurand] = useState("");
  const [data, setData] = useState([]);
  const [netError, setNetError] = useState(undefined);

  function closeModal() {
    setModalOpen(false);
  }

  const chartClickHandler = useCallback((e: any) => {
    setActiveMeasurand(e.activePayload[0].dataKey);
  }, [])

  useEffect(() => {
    selectedRoutes.forEach((route, i) => {
      fetch(
        `http://localhost:3001/routeMeasurementDataPoints/${
          route[RouteFieldEnum.route_id]
        }`
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

  return (
    <div style={{ marginLeft: "10px" }}>
      <ul style={{ display: "flex" }}>
        {selectedRoutes.map((route, i) => {
          return data[i] !== undefined ? (
            <div style={{ marginLeft: "10px" }}>
              <span style={chartLabelStyles}>
                {toDateString(route[RouteFieldEnum.start_time_s])}
              </span>
              <p style={{ color: "#000", fontSize: "12px", margin: 0 }}>
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
                    label={"Total Exposure"}
                    text={`${route.total_vibration_exposure}`}
                    unit={MeasurandUnitEnum.vibration}
                    style={statLabelStyles}
                  />
                  <LabeledText
                    label={"Average vibration"}
                    text={`${route.avg_vibration}`}
                    unit={MeasurandUnitEnum.vibration}
                    style={statLabelStyles}
                  />
                  <LabeledText
                    label={"Average noise"}
                    text={`${route.avg_noise}`}
                    unit={MeasurandUnitEnum.noise_db}
                    style={statLabelStyles}
                  />
                </div>
                <div>
                  <LabeledText
                    label={"Average temperature"}
                    text={`${route.avg_temperature}`}
                    unit={MeasurandUnitEnum.temperature_celsius}
                    style={statLabelStyles}
                  />
                  <LabeledText
                    label={"Average velocity"}
                    text={`${route.avg_temperature}`}
                    unit={MeasurandUnitEnum.velocity_kmps}
                    style={statLabelStyles}
                  />
                  <LabeledText
                    label={"Average pressure"}
                    text={`${route.avg_pressure}`}
                    unit={MeasurandUnitEnum.pressure_pascals}
                    style={statLabelStyles}
                  />
                </div>
              </div>
              <p style={chartLabelStyles}>Vibration</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.vibration}
                onClick={chartClickHandler}
              />
              {activeMeasurand === DatapointFieldEnum.vibration && (
                <Map
                  data={data[i]}
                  measurand={DatapointFieldEnum.vibration}
                  setMapRef={() => {}}
                  style={{ height: "200px", width: "410px" }}
                />
              )}
              <p style={chartLabelStyles}>Noise</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.noise_db}
                onClick={chartClickHandler}
              />
              {activeMeasurand === DatapointFieldEnum.noise_db && (
                <Map
                  data={data[i]}
                  measurand={DatapointFieldEnum.noise_db}
                  setMapRef={() => {}}
                  style={{ height: "200px", width: "410px" }}
                />
              )}
              <p style={chartLabelStyles}>Temperature</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.temperature_celsius}
                onClick={chartClickHandler}
              />
              {activeMeasurand === DatapointFieldEnum.temperature_celsius && (
                <Map
                  data={data[i]}
                  measurand={DatapointFieldEnum.temperature_celsius}
                  setMapRef={() => {}}
                  style={{ height: "200px", width: "410px" }}
                />
              )}
              <p style={chartLabelStyles}>Velocity</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.velocity_kmps}
                onClick={chartClickHandler}
              />
              {activeMeasurand === DatapointFieldEnum.velocity_kmps && (
                <Map
                  data={data[i]}
                  measurand={DatapointFieldEnum.velocity_kmps}
                  setMapRef={() => {}}
                  style={{ height: "200px", width: "410px" }}
                />
              )}
              <p style={chartLabelStyles}>Pressure</p>
              <Chart
                data={data[i]}
                measurand={DatapointFieldEnum.pressure_pascals}
                onClick={chartClickHandler}
              />
			  {activeMeasurand === DatapointFieldEnum.pressure_pascals && (
                <Map
                  data={data[i]}
                  measurand={DatapointFieldEnum.pressure_pascals}
                  setMapRef={() => {}}
                  style={{ height: "200px", width: "410px" }}
                />
              )}
            </div>
          ) : (
            <div
              style={{
                width: "410px",
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
    </div>
  );
}

export default memo(TripsDetails);
