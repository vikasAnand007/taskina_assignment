import React from "react";
import "./button.css";

const Button = ({
  disabled = false,
  children = "Done",
  onSubmit = () => {},
}) => {
  return (
    <button
      disabled={disabled}
      className={`btn-style ${disabled ? "btn-disabled" : ""}`}
      onClick={onSubmit}
    >
      {children}
    </button>
  );
};

export default Button;
