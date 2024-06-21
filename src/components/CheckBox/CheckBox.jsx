import React from "react";
import "./checkbox.css";

const CheckBox = ({
  variant = "v1",
  handleChange = () => {},
  ...rest
  // name = "",
  // checked = false,
  // defaultChecked = false,
}) => {
  return (
    <label className={`checkbox-wrapper cw-${variant}`}>
      <input
        // defaultChecked={checked}
        // name={name}
        type="checkbox"
        onChange={handleChange}
        {...rest}
      />
      <div className={`checkmark cm-${variant}`}></div>
    </label>
  );
};

export default CheckBox;
