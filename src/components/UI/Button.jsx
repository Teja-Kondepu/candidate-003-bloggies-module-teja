import React from "react";
export default function Button({ children, onClick, disabled, styleType = "primary" }) {
  const styles = {
    primary: {
      background: "#3F51B5",
      color: "#fff",
      border: "none",
      borderRadius: "28px",
      padding: "0.75rem 2rem",
      fontWeight: 700,
      fontSize: "1rem",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(63,81,181,0.11)",
      transition: "background 0.2s",
      outline: "none"
    },
    ghost: {
      background: "none",
      color: "#3F51B5",
      border: "1px solid #3F51B5",
      borderRadius: "28px",
      padding: "0.75rem 2rem",
      fontWeight: 700,
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background 0.2s, color 0.2s",
      outline: "none"
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={styleType === "primary" ? styles.primary : styles.ghost}
      onMouseOver={e => {
        if (styleType === "primary") e.target.style.background = "#283593";
      }}
      onMouseOut={e => {
        if (styleType === "primary") e.target.style.background = "#3F51B5";
      }}
    >
      {children}
    </button>
  );
}