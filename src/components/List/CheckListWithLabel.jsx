import React from "react";
import Card from "../Card/Card";
import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";
import CheckBoxList from "../CheckBoxList/CheckBoxList";

const items = [
  {
    id: "1",
    variant: "v1",
  },
  {
    id: "2",
    variant: "v2",
    defaultChecked: true,
  },
  {
    id: "3",
    variant: "v3",
    defaultChecked: true,
  },
  {
    id: "4",
    variant: "v4",
    defaultChecked: true,
  },
  {
    id: "5",
    variant: "v5",
    defaultChecked: true,
  },
  {
    id: "6",
    variant: "v6",
    defaultChecked: true,
  },
  {
    id: "7",
    variant: "v7",
    defaultChecked: true,
  },
  {
    id: "8",
    variant: "v8",
    defaultChecked: true,
  },
];

const CheckListWithLabel = () => {
  return (
    <Card width="300px">
      <CheckBoxList
        items={items.map((i) => ({
          ...i,
          label: "All pages",
          name: "allPages",
        }))}
      />
    </Card>
  );
};

export default CheckListWithLabel;
