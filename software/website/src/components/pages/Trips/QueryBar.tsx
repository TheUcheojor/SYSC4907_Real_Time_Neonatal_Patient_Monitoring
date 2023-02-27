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
  activeSearch: boolean;
  setQueryStat: (value) => void;
  setQueryComparator: (value) => void;
  setQueryValue: (value) => void;
}

function QueryBar({
  activeSearch,
  setQueryStat,
  setQueryComparator,
  setQueryValue,
}: QueryBarProps) {
  const selectStyles = {
    borderColor: activeSearch ? ColorEnum.Green : ColorEnum.Black,
    borderWidth: activeSearch ? "2px" : "1px",
    borderRadius: "3px",
    height: "35px",
    marginLeft: "1px",
    marginRight: "1px"
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "5px",
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
          ...selectStyles,
        }}
      />
    </div>
  );
}

export default QueryBar;
