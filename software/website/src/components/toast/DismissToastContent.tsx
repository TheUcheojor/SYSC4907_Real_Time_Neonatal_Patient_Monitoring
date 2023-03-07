import React from "react";

interface DismissToastContentProps {
  text: string;
  onDismiss: () => void;
}

function DismissToastContent({ text, onDismiss }: DismissToastContentProps) {
  return (
    <span>
      {text}
      <button
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "15px",
          marginLeft: "10px",
          fontSize: "14px",
          fontWeight: 700,
        }}
        onClick={onDismiss}
      >
        X
      </button>
    </span>
  );
}

export default DismissToastContent;
