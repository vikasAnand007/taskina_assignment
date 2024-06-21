import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ButtonList = () => {
  return (
    <Card width="300px">
      <Button />
      <Button disabled />
      <Button />
    </Card>
  );
};

export default ButtonList;
