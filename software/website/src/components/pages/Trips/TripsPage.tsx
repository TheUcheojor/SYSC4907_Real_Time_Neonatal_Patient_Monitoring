import React, { useState } from "react";
import { route1, route2 } from "mock/mockTrip";
import CompareIcon from "components/icons/CompareIcon";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import { queryTripDatapoints } from "interface/TripsInterface";
import List from "components/List";
import MapWithChart from "components/MapWithChart";
import { elapsedDurationInHoursAndMinutes } from "utility/StringUtil";
import CancelIcon from "components/icons/CancelIcon";
import { ColorEnum } from "constants/ColorEnum";
import TripsDetails from "./TripsDetails";
import BackIcon from "components/icons/BackIcon";

const routes = [route1, route2];

const pStyles = {
  fontWeight: 700,
  marginLeft: "10px",
  color: "#FFF",
  width: "100%",
  display: "block",
  paddingTop: "5px",
  paddingBottom: "5px",
};

function TripsPage() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [isComparing, setIsComparing] = useState(false);

  function onListElemClick(e) {
    const targetedRoute = routes.find(
      (route) => route.routeId === e.currentTarget.id
    );

    if (isSelecting) {
      if (
        !selectedRoutes.some((elem) => elem.routeId === targetedRoute.routeId)
      ) {
        selectedRoutes.push(targetedRoute);
        setSelectedRoutes([...selectedRoutes]);
      } else {
        setSelectedRoutes([
          ...selectedRoutes.filter(
            (elem) => elem.routeId !== targetedRoute.routeId
          ),
        ]);
      }
    }

    if (!isSelecting) {
      setSelectedRoutes([targetedRoute]);
    }
  }

  function getContent() {
    if (!isComparing) {
      return (
        <div style={{ marginLeft: "10px", marginTop: "10px", display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ color: "#000", fontWeight: 700 }}>Trips</p>
            <List
              routes={routes}
              elemOnClick={onListElemClick}
              activeRoutes={selectedRoutes}
            />
          </div>
          {selectedRoutes.length > 0 && (
            <div style={{ marginLeft: "10px", marginRight: "10px" }}>
              <div
                style={{
                  width: "410px",
                  height: "fit-content",
                  backgroundColor: "#000",
                  borderRadius: "6px",
                }}
              >
                <span style={pStyles}>
                  Owner: {selectedRoutes[selectedRoutes.length - 1].ownerId}
                </span>
                <span style={pStyles}>
                  Duration:{" "}
                  {elapsedDurationInHoursAndMinutes(
                    selectedRoutes[selectedRoutes.length - 1].startTime,
                    selectedRoutes[selectedRoutes.length - 1].endTime
                  )}
                </span>
                <span style={pStyles}>
                  Total exposure:{" "}
                  {
                    selectedRoutes[selectedRoutes.length - 1]
                      .totalVibrationExposure
                  }
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <MapWithChart
                  measurand={DatapointFieldEnum.vibration}
                  data={queryTripDatapoints(
                    parseInt(selectedRoutes[selectedRoutes.length - 1].routeId)
                  )}
                />
              </div>
            </div>
          )}
          {isSelecting && (
            <span style={{ color: "#000", marginLeft: "5px" }}>
              Select 1-4 routes to compare
            </span>
          )}
          {isSelecting && selectedRoutes.length > 0 && (
            <div>
              <span style={{ color: "#000", marginLeft: "5px" }}>
                can compare
              </span>
              <CompareIcon
                style={{ marginLeft: "auto", marginRight: "5px" }}
                onClick={() => setIsComparing(true)}
                bgColor={ColorEnum.Green}
                bgColorHover={ColorEnum.LightGreen}
              />
            </div>
          )}
          {isSelecting && (
            <CancelIcon
              style={{
                marginLeft: "auto",
                marginRight: "5px",
              }}
              onClick={() => {
                setIsSelecting(false);
                setSelectedRoutes([selectedRoutes[selectedRoutes.length - 1]]);
              }}
              bgColor="#000"
              bgColorHover="#2a2a2a"
            />
          )}
          {!isSelecting && (
            <CompareIcon
              style={{ marginLeft: "auto", marginRight: "5px" }}
              onClick={() => setIsSelecting(true)}
              bgColor="#000"
              bgColorHover="#2a2a2a"
            />
          )}
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <BackIcon onClick={() => setIsComparing(false)} />
          <ul style={{ display: "flex" }}>
            {selectedRoutes.map((selectedRoute) => {
              console.log(selectedRoute);
              return (
                <TripsDetails
                  route={selectedRoute}
                  data={queryTripDatapoints(parseInt(selectedRoute.routeId))}
                ></TripsDetails>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  return getContent();
}

export default TripsPage;
