import React from "react";
export default function Loader({ small = false }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: small ? "18px" : "24px",
        height: small ? "18px" : "24px",
        border: "3px solid #ffc107",
        borderTop: "3px solid #3f51b5",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}
    />
  );
}