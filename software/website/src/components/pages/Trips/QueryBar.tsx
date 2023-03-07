import SearchIcon from "components/icons/SearchIcon";
import { ColorEnum } from "constants/ColorEnum";
import { RouteFieldEnum } from "constants/DatapointFieldEnum";
import React from "react";

export const comparatorOptions = [
  { label: "-", value: "-" },
  { label: "<", value: "<" },
  { label: "=", value: "=" },
  { label: ">", value: ">" },
];
export const statisticOptions = [
  { label: "-", value: "-" },
  { label: RouteFieldEnum.avg_noise, value: RouteFieldEnum.avg_noise },
  { label: RouteFieldEnum.avg_pressure, value: RouteFieldEnum.avg_pressure },
  {
    label: RouteFieldEnum.avg_temperature,
    value: RouteFieldEnum.avg_temperature,
  },
  { label: RouteFieldEnum.avg_velocity, value: RouteFieldEnum.avg_velocity },
  {
    label: RouteFieldEnum.avg_vibration,
    value: RouteFieldEnum.avg_vibration,
  },
  {
    label: RouteFieldEnum.total_vibration,
    value: RouteFieldEnum.total_vibration,
  },
];

interface QueryBarProps {
  setQueryStat: (value) => void;
  setQueryComparator: (value) => void;
  setQueryValue: (value) => void;
  onQuery: () => void;
}

function QueryBar({
  setQueryStat,
  setQueryComparator,
  setQueryValue,
  onQuery,
}: QueryBarProps) {
  const selectStyles = {
    borderColor: ColorEnum.Black,
    borderWidth: "1px",
    borderRadius: "3px",
    height: "35px",
    marginLeft: "1px",
    marginRight: "1px",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <select
        onChange={(e) => {
          setQueryStat(e.target.value);
        }}
        style={selectStyles}
      >
        {statisticOptions.map((stat) => {
          return <option value={stat.value}>{stat.label}</option>;
        })}
      </select>
      <select
        style={selectStyles}
        onChange={(e) => {
          setQueryComparator(e.target.value);
        }}
      >
        {comparatorOptions.map((comparator) => {
          return <option value={comparator.value}>{comparator.label}</option>;
        })}
      </select>
      <input
        type="text"
        onChange={(e) => setQueryValue(e.target.value)}
        style={{
          marginBottom: 0,
          borderWidth: "1px",
          minWidth: "20px",
          ...selectStyles,
        }}
      />
      <SearchIcon
        fill={ColorEnum.White}
        onClick={onQuery}
        styles={{ height: "35px", width: "20px", borderRadius: "3px" }}
      />
    </div>
  );
}

export default QueryBar;
