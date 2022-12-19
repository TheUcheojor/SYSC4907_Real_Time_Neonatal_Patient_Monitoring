import React from "react";
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
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";

const RenderDot = ({ cx, cy }: any) => {
  return <Dot cx={cx} cy={cy} fill={ColorEnum.Yellow} r={3} />;
};

interface ChartProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  chartClickHandler?: (data: any) => void;
}

function Chart({ data, measurand, chartClickHandler }: ChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div>
          <p>{`reading : ${payload[0].payload[measurand]}`}</p>
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
        onClick={chartClickHandler}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#0E9CFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0E9CFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <title>{measurand}</title>
        <XAxis
          dataKey={DatapointFieldEnum.time}
          tick={{ fill: "white" }}
          tickLine={{ stroke: "white" }}
        />
        <YAxis tick={{ fill: "white" }} tickLine={{ stroke: "white" }} />
        <CartesianGrid stroke="#fff" strokeDasharray="1 4" />
        <Area
          type="monotone"
          dataKey={measurand}
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
  );
}

export default Chart;
