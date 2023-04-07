import React, { memo, useState, useEffect, useRef } from "react";
import fetch from "node-fetch";
import CompareIcon from "components/icons/CompareIcon";
import {
  DatapointFieldEnum,
} from "constants/DatapointFieldEnum";
import List from "components/pages/Trips/ListBrowsing/List";
import CancelIcon from "components/icons/CancelIcon";
import { ColorEnum } from "constants/ColorEnum";
import CompareTrips from "components/pages/Trips/CompareTrips";
import BackIcon from "components/icons/BackIcon";
import LoadingIcon from "components/icons/LoadingIcon";
import MapWithChartNet from "components/visualization/MapWithChartNet";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import Pagination from "components/pages/Trips/ListBrowsing/Pagination";
import QueryBar, { comparatorOptions, statisticOptions } from "./ListBrowsing/QueryBar";
import { HttpStatusEnum } from "constants/HttpStatusEnum";
import TripPreview from "./TripPreview";
import Modal from "components/modal/Modal";
import DeleteTripModalContent from "components/modal/DeleteTripModalContent";
import toast from "react-hot-toast";
import DismissToastContent from "components/toast/DismissToastContent";

interface TripsProps {
  onLogout: () => void;
}

function TripsPage({ onLogout }: TripsProps) {
  const ADJACENT_COMPONENTS_SIZE = 235;
  const LIST_ELEM_SIZE = 60;
  const PAGE_SIZE = Math.floor(
    (window.innerHeight - ADJACENT_COMPONENTS_SIZE) / LIST_ELEM_SIZE
  );
  console.log("TRIPS PAGE RENDER");
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedRoutes, setSelectedRoutes] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [routes, setRoutes] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRoutes, setTotalRoutes] = useState(0);
  const [queryStat, setQueryStat] = useState(statisticOptions[0].value);
  const [queryComparator, setQueryComparator] = useState(
    comparatorOptions[0].value
  );
  const [queryValue, setQueryValue] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const deleteTripId = useRef(undefined);
  const deleteTripPatient = useRef("");

  const queryString =
    queryStat !== "-" &&
    queryComparator !== "-" &&
    queryValue !== "" &&
    /^[0-9.]+$/.test(queryValue)
      ? `&search_query=${queryStat}${queryComparator}${queryValue}`
      : "";

  const fetchRoutes = () => {
    setRoutes(undefined);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/routes?page=${currentPage}&limit=${PAGE_SIZE}${queryString}`,
      {
        headers: getFetchHeaderWithAuth(),
      }
    )
      .then((res) => {
        if (res.status === HttpStatusEnum.UNAUTHORIZED) {
          onLogout();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        setRoutes(result.routes);
        setTotalRoutes(result.totalRoutes);
      });
  };

  useEffect(fetchRoutes, [currentPage, onLogout]);

  function onDeleteTrip() {
    setRoutes(undefined);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/routes/${deleteTripId.current}`,
      {
        method: "DELETE",
        headers: getFetchHeaderWithAuth(),
      }
    )
      .then((res) => {
        if (res.status === HttpStatusEnum.UNAUTHORIZED) {
          onLogout();
        } else if (res.status === HttpStatusEnum.OK) {
          return res;
        } else {
          toast.error((t) => (
            <DismissToastContent
              text={"Trip deletion failed"}
              onDismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
      })
      .then((result) => {
        toast.success((t) => (
          <DismissToastContent
            text={"Trip deleted"}
            onDismiss={() => toast.dismiss(t.id)}
          />
        ));
        setModalOpen(false);
        setSelectedRoutes(
          selectedRoutes.filter((selectedRoute) => {
            return selectedRoute.route_id !== deleteTripId.current;
          })
        );
        fetchRoutes();
      });
  }

  function onListElemClick(e) {
    const targetedRoute = routes.find(
      (route) => route.route_id === parseInt(e.currentTarget.id)
    );

    if (targetedRoute === undefined) {
      console.error("No route data matches the clicked list elements id");
      return;
    }
    if (isSelecting) {
      if (
        !selectedRoutes.some(
          (elem) => elem.route_id === targetedRoute.route_id
        )
      ) {
        selectedRoutes.push(targetedRoute);
        setSelectedRoutes([...selectedRoutes]);
      } else {
        setSelectedRoutes([
          ...selectedRoutes.filter(
            (elem) => elem.route_id !== targetedRoute.route_id
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
        <div
          style={{
            marginLeft: "10px",
            marginTop: "10px",
            display: "flex",
            columnGap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "334px",
            }}
          >
            <p
              style={{
                fontWeight: 700,
              }}
            >
              Trips
            </p>
            <QueryBar
              setQueryStat={(e) => {
                setQueryStat(e);
              }}
              setQueryComparator={(e) => {
                setQueryComparator(e);
              }}
              setQueryValue={(e) => {
                setQueryValue(e);
              }}
              onQuery={fetchRoutes}
            />
            {routes === undefined ? (
              <LoadingIcon />
            ) : routes.length > 0 ? (
              <List
                routes={routes}
                elemOnClick={onListElemClick}
                activeRoutes={selectedRoutes}
                elemDeleteOnClick={(route) => {
                  setModalOpen(true);
                  deleteTripPatient.current = route.patient_id;
                  deleteTripId.current = route.route_id;
                }}
              />
            ) : (
              <p>No routes found</p>
            )}
            <Pagination
              currentPage={currentPage}
              totalSize={totalRoutes}
              pageSize={PAGE_SIZE}
              siblingIndexSize={1}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </div>
          {selectedRoutes.length > 0 && (
            <div
              style={{
                minWidth: "200px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 3,
              }}
            >
              <div
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TripPreview
                  onLogout={onLogout}
                  selectedRoute={selectedRoutes[selectedRoutes.length - 1]}
                />
                <MapWithChartNet
                  onLogout={onLogout}
                  measurand={DatapointFieldEnum.vibration}
                  routeId={parseInt(
                    selectedRoutes[selectedRoutes.length - 1].route_id
                  )}
                />
              </div>
            </div>
          )}
          {isSelecting && (
            <p>
              <p style={{ color: ColorEnum.Black, margin: 0 }}>
                Select 1-4 routes to compare
              </p>
              <p>{selectedRoutes.length} routes selected</p>
            </p>
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
                  marginLeft: "5px",
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
                  marginLeft: "5px",
                }}
                onClick={() => {
                  setIsSelecting(false);
                  selectedRoutes.length > 0
                    ? setSelectedRoutes([
                        selectedRoutes[selectedRoutes.length - 1],
                      ])
                    : setSelectedRoutes([]);
                }}
                bgColor={ColorEnum.Black}
                bgColorHover={ColorEnum.Grey}
              />
            )}
            {!isSelecting && (
              <CompareIcon
                style={{ marginRight: "5px", marginLeft: "5px" }}
                onClick={() => setIsSelecting(true)}
                bgColor={ColorEnum.Black}
                bgColorHover={ColorEnum.Grey}
              />
            )}
          </div>

          <Modal
            title={"Delete trip"}
            modalOpen={isModalOpen}
            closeModal={() => {
              setModalOpen(false);
            }}
          >
            <DeleteTripModalContent
              trip_id={deleteTripId.current}
              patient_id={deleteTripPatient.current.toString()}
              onDelete={onDeleteTrip}
            />
          </Modal>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <BackIcon onClick={() => setIsComparing(false)} />
          <CompareTrips selectedRoutes={selectedRoutes} />
        </div>
      );
    }
  }

  return getContent();
}

export default memo(TripsPage);
