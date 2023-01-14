import React, { memo } from "react";
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
import { ColorEnum } from "constants/ColorEnum";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";

const RenderDot = ({ cx, cy }: any) => {
  return <Dot cx={cx} cy={cy} fill={ColorEnum.Yellow} r={3} />;
};

function getChartColor(measurand: DatapointFieldEnum): ColorEnum {
  switch (measurand) {
    case DatapointFieldEnum.velocity_kmps:
      return ColorEnum.Purple;
    case DatapointFieldEnum.temperature_celsius:
      return ColorEnum.Zomp;
    case DatapointFieldEnum.vibration:
      return ColorEnum.Blue;
    case DatapointFieldEnum.noise_db:
      return ColorEnum.Ice;
  }
}

interface ChartProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  onClick?: (data: any) => void;
}

function Chart({ data, measurand, onClick }: ChartProps) {
  console.log("CHART RENDER");
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p>{`reading : ${payload[0].payload[measurand]}`}</p>
          {payload[0].payload[DatapointFieldEnum.annotation] !== "" ? (
            <p>{`annotation : ${
              payload[0].payload[DatapointFieldEnum.annotation]
            }`}</p>
          ) : (
            ""
          )}
        </div>
      );
    }

    return null;
  };

  const _data = [];

  data.forEach((dp) => {
    _data.push({
      annotationPos:
        dp[DatapointFieldEnum.annotation] !== "" ? dp[measurand] : undefined,
      ...dp,
    });
  });

  return (
    <div
      style={{
        backgroundColor: "#000",
        borderRadius: "6px",
        width: "fit-content",
        paddingRight: "10px",
      }}
    >
      <ComposedChart
        width={400}
        height={200}
        data={_data}
        margin={{ right: 20, top: 20 }}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "auto" }}
      >
        <title>{measurand}</title>
        <XAxis
          dataKey={DatapointFieldEnum.time_s}
          tick={{ fill: "white" }}
          tickLine={{ stroke: "white" }}
        />
        <YAxis tick={{ fill: "white" }} tickLine={{ stroke: "white" }} />
        <CartesianGrid stroke="#fff" strokeDasharray="1 4" />
        <Area
          type="monotone"
          dataKey={measurand}
          fill={getChartColor(measurand)}
          stroke={getChartColor(measurand)}
          fillOpacity={0.2}
        />
        <Tooltip content={<CustomTooltip />} />
        <Scatter dataKey="annotationPos" shape={<RenderDot />}></Scatter>
      </ComposedChart>
    </div>
  );
}

export default memo(Chart);
