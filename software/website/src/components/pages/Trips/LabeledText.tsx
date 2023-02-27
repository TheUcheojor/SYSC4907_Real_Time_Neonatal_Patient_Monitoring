import { ColorEnum } from "constants/ColorEnum";
import CSS from "csstype";
import React from "react";

const textStyles = {
  color: ColorEnum.White,
  fontSize: "14px",
};

interface LabeledSpanProps {
  label: string;
  text: string;
  style?: CSS.Properties;
  isBoldLabel?: boolean;
}

function LabeledText({ label, text, style, isBoldLabel = true }: LabeledSpanProps) {
  return (
    <div style={{ ...textStyles, ...style, display: "flex" }}>
      <span style={{ ...textStyles, fontWeight: isBoldLabel ? 700 : 200 }}>
        {label}:{" "}
      </span>
      <span style={{ ...textStyles, marginLeft: "auto" }}>{text}</span>
    </div>
  );
}

export default LabeledText;
