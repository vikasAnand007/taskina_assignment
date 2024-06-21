import React from "react";
import "./button.css";

const Button = ({ disabled = false, children = "Done" }) => {
  return (
    <button
      disabled={disabled}
      className={`btn-style ${disabled ? "btn-disabled" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
