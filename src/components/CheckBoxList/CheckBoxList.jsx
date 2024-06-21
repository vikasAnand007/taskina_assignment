import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";
import "./checkboxList.css";

const CheckBoxList = ({ items = [], handleChange }) => {
  return (
    <div className="checkbox-list">
      {items.map((elem) => (
        <CheckBoxItem key={elem.id} elem={{ ...elem, handleChange }} />
      ))}
    </div>
  );
};

export default CheckBoxList;
