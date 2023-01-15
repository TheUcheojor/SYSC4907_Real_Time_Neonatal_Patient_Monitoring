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
  unit?: string;
  style?: CSS.Properties;
}

function LabeledText({ label, text, unit, style }: LabeledSpanProps) {
  return (
    <div style={{ ...textStyles, ...style, display: 'flex' }}>
      <span style={{ ...textStyles, fontWeight: 700 }}>{label}: </span>
      <span style={{...textStyles, marginLeft: "auto"}}>
        {text} {unit}
      </span>
    </div>
  );
}

export default LabeledText;
