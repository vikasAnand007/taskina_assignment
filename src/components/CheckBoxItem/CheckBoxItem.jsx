import "./checkBoxItem.css";
import CheckBox from "../CheckBox/CheckBox";
import { memo } from "react";

const CheckBoxItem = ({ elem }) => {
  return (
    <div className="checkbox-container">
      {elem.label}
      <CheckBox {...elem} />
    </div>
  );
};

export default memo(CheckBoxItem);
