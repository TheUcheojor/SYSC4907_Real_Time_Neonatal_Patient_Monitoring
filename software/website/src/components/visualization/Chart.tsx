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

const RenderDot = ({ cx, cy, fill }: any) => {
  return <Dot cx={cx} cy={cy} fill={fill} r={3} />;
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

const RenderLabel = ({ x, y, value }: any) => {
  return (
    <text
      x={x}
      y={y}
      dy={-4}
      fill={ColorEnum.White}
      fontSize={10}
      textAnchor="start"
    >
      {`Segment ${value}`}
    </text>
  );
};

interface ChartProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  widthPx?: number;
  onClick?: (data: any) => void;
}

function Chart({ data, measurand, widthPx, onClick }: ChartProps) {
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
  let maxStrLenData;
  let seenSeg = [];

  data.forEach((dp) => {
    let date = new Date(dp.time_s * 1000);
    let segUpdate = false;
    if (!seenSeg.includes(dp[DatapointFieldEnum.segment_id])) {
      seenSeg.push(dp[DatapointFieldEnum.segment_id]);
      segUpdate = true;
    }
    _data.push({
      // place annotations alongside their datapoint
      annotationPos:
        dp[DatapointFieldEnum.annotation] !== "" ? dp[measurand] : undefined,
      segmentPos: segUpdate ? dp[measurand] : undefined,
      ...dp,
      time_s: date.getHours() + ":" + date.getMinutes(),
      // only way for segment label to properly get seg value
      value: seenSeg.length,
    });
    const strLenData = Math.round(dp[measurand]).toString().length;
    if (maxStrLenData === undefined || strLenData > maxStrLenData)
      maxStrLenData = strLenData;
  });

  return (
    <div
      style={{
        backgroundColor: ColorEnum.Black,
        borderRadius: "6px",
        width: `${widthPx}px`,
      }}
    >
      <ResponsiveContainer height={200} width="100%">
        <ComposedChart
          height={200}
          data={_data}
          margin={{
            right: 30,
            top: 20,
            bottom: 10,
            left:
              // dynamically compute chart left margin, otherwise axis ticks fall outside div
              maxStrLenData + MeasurandUnitMap.get(measurand).length > 3
                ? 4 * (maxStrLenData + MeasurandUnitMap.get(measurand).length)
                : 0,
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
            domain={[
              (dataMin) => Math.floor(dataMin * 0.95),
              (dataMax) => Math.ceil(dataMax * 1.05),
            ]}
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
          <Scatter
            dataKey="annotationPos"
            shape={<RenderDot fill={ColorEnum.Yellow} />}
          />
          <Scatter
            dataKey="segmentPos"
            shape={<RenderDot fill={ColorEnum.White} />}
            label={({ x, y, value }: any) => (
              <RenderLabel x={x} y={y} value={value} />
            )}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default memo(Chart);
