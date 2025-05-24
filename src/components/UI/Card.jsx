import React from "react";
export default function Card({ children }) {
  return (
    <div
      style={{
        borderRadius: "20px",
        boxShadow: "0 4px 16px rgba(63,81,181,0.08)",
        background: "#fff",
        padding: "2rem",
        maxWidth: 400,
        width: "100%",
        margin: "1rem auto"
      }}
    >
      {children}
    </div>
  );
}