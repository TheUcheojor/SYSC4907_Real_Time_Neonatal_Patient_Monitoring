import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import CompareIcon from "components/icons/CompareIcon";
import {
  DatapointFieldEnum,
  RouteFieldEnum,
} from "constants/DatapointFieldEnum";
import { queryTripDatapoints } from "interface/TripsInterface";
import List from "components/List";
import MapWithChart from "components/MapWithChart";
import { elapsedDurationInHoursAndMinutes } from "utility/StringUtil";
import CancelIcon from "components/icons/CancelIcon";
import { ColorEnum } from "constants/ColorEnum";
import TripsDetails from "./TripsDetails";
import BackIcon from "components/icons/BackIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import MapWithChartNet from "components/MapWithChartNet";

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
  console.log("TRIPS PAGE RENDER");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [netError, setNetError] = useState(true);
  const [routes, setRoutes] = useState(undefined);

  useEffect(() => {
    fetch("https://localhost:3001/routes")
      .then((res) => res.json())
      .then(
        (result) => {
          setRoutes(result);
        },
        (error) => {
          setNetError(error);
        }
      );
  }, []);

  function onListElemClick(e) {
    const targetedRoute = routes.find(
      (route) => route[RouteFieldEnum.route_id] === parseInt(e.currentTarget.id)
    );

    if (targetedRoute === undefined) {
      console.log("No route data matches the clicked list elements id");
      return;
    }
    if (isSelecting) {
      if (
        !selectedRoutes.some(
          (elem) =>
            elem[RouteFieldEnum.route_id] ===
            targetedRoute[RouteFieldEnum.route_id]
        )
      ) {
        selectedRoutes.push(targetedRoute);
        setSelectedRoutes([...selectedRoutes]);
      } else {
        setSelectedRoutes([
          ...selectedRoutes.filter(
            (elem) =>
              elem[RouteFieldEnum.route_id] !==
              targetedRoute[RouteFieldEnum.route_id]
          ),
        ]);
      }
    }

    if (!isSelecting) {
      setSelectedRoutes([targetedRoute]);
    }
  }

  function getContent() {
    if (routes === undefined) {
      return (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingIcon />
        </div>
      );
    }
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
                  Owner:{" "}
                  {
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.owner_id
                    ]
                  }
                </span>
                <span style={pStyles}>
                  Duration:{" "}
                  {elapsedDurationInHoursAndMinutes(
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.start_time_s
                    ],
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.end_time_s
                    ]
                  )}
                </span>
                <span style={pStyles}>
                  Total exposure:{" "}
                  {
                    selectedRoutes[selectedRoutes.length - 1][
                      RouteFieldEnum.total_vibration_exposure
                    ]
                  }
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <MapWithChartNet
                  measurand={DatapointFieldEnum.vibration}
                  routeId={parseInt(
                    selectedRoutes[selectedRoutes.length - 1][
                      DatapointFieldEnum.route_id
                    ]
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
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            {isSelecting && selectedRoutes.length > 0 && (
              <CompareIcon
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
                onClick={() => setIsComparing(true)}
                bgColor={ColorEnum.Green}
                bgColorHover={ColorEnum.LightGreen}
              />
            )}
            {isSelecting && (
              <CancelIcon
                style={{
                  marginRight: "5px",
                }}
                onClick={() => {
                  setIsSelecting(false);
                  selectedRoutes.length > 0
                    ? setSelectedRoutes([
                        selectedRoutes[selectedRoutes.length - 1],
                      ])
                    : setSelectedRoutes([]);
                }}
                bgColor="#000"
                bgColorHover="#2a2a2a"
              />
            )}
            {!isSelecting && (
              <CompareIcon
                style={{ marginRight: "5px" }}
                onClick={() => setIsSelecting(true)}
                bgColor="#000"
                bgColorHover="#2a2a2a"
              />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <BackIcon onClick={() => setIsComparing(false)} />
          <TripsDetails selectedRoutes={selectedRoutes} />
        </div>
      );
    }
  }

  return getContent();
}

export default TripsPage;
