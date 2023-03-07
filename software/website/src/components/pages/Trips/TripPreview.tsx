import { ColorEnum } from "constants/ColorEnum";
import { RouteFieldEnum } from "constants/DatapointFieldEnum";
import { HttpStatusEnum } from "constants/HttpStatusEnum";
import { MeasurandUnitMap } from "constants/MeasurandUnitEnum";
import { SegmentFieldEnum } from "constants/SegmentFieldEnum";
import React, { useEffect, useState } from "react";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import { elapsedDurationInHoursAndMinutes } from "util/StringUtil";
import LabeledText from "./LabeledText";
const labelStyles = {
  marginLeft: "10px",
};

function TripPreview({ selectedRoute, onLogout }) {
  const [segments, setSegments] = useState(undefined);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${
        process.env.REACT_APP_SERVER_PORT
      }/segments/${selectedRoute[RouteFieldEnum.route_id]}`,
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
        setSegments(result);
      });
  }, [selectedRoute, onLogout]);

  return (
    <div
      style={{
        backgroundColor: ColorEnum.Black,
        borderRadius: "6px",
        display: "grid",
        gridAutoFlow: "column",
      }}
    >
      <div style={{ margin: "5px 10px 5px 10px" }}>
        <h4
          style={{
            color: ColorEnum.White,
            fontWeight: 700,
            marginBottom: "5px",
            marginTop: 0,
          }}
        >
          Trip Details
        </h4>
        <LabeledText
          label="Patient"
          text={selectedRoute[RouteFieldEnum.patient_id]}
          style={labelStyles}
          isBoldLabel={false}
        />
        <LabeledText
          label="Duration"
          text={elapsedDurationInHoursAndMinutes(
            selectedRoute[RouteFieldEnum.start_time_s],
            selectedRoute[RouteFieldEnum.end_time_s]
          )}
          style={labelStyles}
          isBoldLabel={false}
        />
        <LabeledText
          label="Total vibration exposure"
          text={`${
            selectedRoute[RouteFieldEnum.total_vibration]
          } ${MeasurandUnitMap.get(RouteFieldEnum.total_vibration)}`}
          style={labelStyles}
          isBoldLabel={false}
        />
      </div>
      {segments !== undefined ? (
        <div style={{ margin: "5px 10px 5px 10px" }}>
          <h4
            style={{
              color: ColorEnum.White,
              fontWeight: 700,
              marginBottom: "5px",
              marginTop: 0,
            }}
          >
            Segment Details
          </h4>
          <ul style={{ padding: 0, margin: 0 }}>
            {segments.map((segment, i) => {
              return (
                <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                  <h5
                    style={{
                      color: ColorEnum.White,
                      fontWeight: 700,
                      marginBottom: "5px",
                      marginTop: 0,
                    }}
                  >
                    Segment {i + 1}
                  </h5>
                  <LabeledText
                    label="Duration"
                    text={elapsedDurationInHoursAndMinutes(
                      segment[SegmentFieldEnum.start_time_s],
                      segment[SegmentFieldEnum.end_time_s]
                    )}
                    style={labelStyles}
                    isBoldLabel={false}
                  />
                  <LabeledText
                    label="Type"
                    text={segment[SegmentFieldEnum.segment_type]}
                    style={labelStyles}
                    isBoldLabel={false}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TripPreview;
