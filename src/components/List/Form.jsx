import React, { useState } from "react";
import Card from "../Card/Card";
import CheckBoxList from "../CheckBoxList/CheckBoxList";
import Separator from "../Saperater/Separator";
import Button from "../Button/Button";

const defaultItems = [
  {
    label: "Page 1",
    name: "page1",
    id: "1",
  },
  {
    label: "Page 2",
    name: "page2",
    id: "2",
  },
  {
    label: "Page 3",
    name: "page3",
    id: "3",
  },
  {
    label: "Page 4",
    name: "page4",
    id: "4",
  },
];

const Form = () => {
  const [items, setItems] = useState(defaultItems);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "all") {
      setItems((prev) => prev.map((item) => ({ ...item, checked })));
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          return { ...item, checked };
        }
        return item;
      })
    );
  };

  let allChecked = true;
  if (items.find((i) => !i.checked)) {
    allChecked = false;
  }

  return (
    <Card>
      <CheckBoxList
        items={[
          {
            label: "App pages",
            name: "all",
            id: "0",
            checked: allChecked,
          },
        ]}
        handleChange={handleCheckboxChange}
      />
      <Separator />
      <CheckBoxList items={items} handleChange={handleCheckboxChange} />
      <Separator />
      <Button disabled={!!!items.find((i) => i.checked)}>Done</Button>
    </Card>
  );
};

export default Form;
