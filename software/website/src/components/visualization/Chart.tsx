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
  ResponsiveContainer,
} from "recharts";
import { ColorEnum } from "constants/ColorEnum";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";
import { MeasurandUnitMap } from "constants/MeasurandUnitEnum";

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
    case DatapointFieldEnum.pressure_pascals:
      return ColorEnum.Green;
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
        <div
          style={{
            border: "2px solid white",
            padding: "5px",
            borderRadius: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <p style={{ color: ColorEnum.White, margin: 0 }}>{`Reading : ${
            payload[0].payload[measurand]
          } ${MeasurandUnitMap.get(measurand)}`}</p>
          {payload[0].payload[DatapointFieldEnum.annotation] !== "" ? (
            <p style={{ color: ColorEnum.White, margin: 0 }}>{`${
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
  let maxLenData;

  data.forEach((dp) => {
    _data.push({
      annotationPos:
        dp[DatapointFieldEnum.annotation] !== "" ? dp[measurand] : undefined,
      ...dp,
    });
    if (
      maxLenData === undefined ||
      dp[measurand].toString().length > maxLenData
    )
      maxLenData = dp[measurand].toString().length;
  });
  return (
    <div
      style={{
        backgroundColor: ColorEnum.Black,
        borderRadius: "6px",
        width: "fit-content",
        paddingRight: "10px",
      }}
    >
      <ComposedChart
        width={400}
        height={200}
        data={_data}
        margin={{
          right: 20,
          top: 20,
          // left:
          //   Math.pow(maxLenData + MeasurandUnitMap.get(measurand).length, 2) /
          //   2,
        }}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "auto" }}
      >
        <title>{measurand}</title>
        <XAxis
          dataKey={DatapointFieldEnum.time_s}
          tick={{ fill: "white", transform: "translate(0,3)" }}
          tickLine={{ stroke: "white" }}
        />
        <YAxis
          tick={{ fill: "white", transform: "translate(-3,0)" }}
          tickLine={{ stroke: "white" }}
          unit={MeasurandUnitMap.get(measurand)}
          allowDecimals={false}
        />
        <CartesianGrid stroke="white" strokeDasharray="1 4" />
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
