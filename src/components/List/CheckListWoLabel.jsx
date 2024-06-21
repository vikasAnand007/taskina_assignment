import React from "react";
import Card from "../Card/Card";
import CheckBox from "../CheckBox/CheckBox";

const CheckListWoLabel = () => {
  return (
    <Card width="100px">
      <CheckBox variant="v1" />
      <CheckBox variant="v2" defaultChecked={true} />
      <CheckBox variant="v3" defaultChecked={true} />
      <CheckBox variant="v4" defaultChecked={true} />
      <CheckBox variant="v5" defaultChecked={true} />
      <CheckBox variant="v6" defaultChecked={true} />
      <CheckBox variant="v7" defaultChecked={true} />
      <CheckBox variant="v8" defaultChecked={true} />
      <CheckBox variant="v2" />
    </Card>
  );
};

export default CheckListWoLabel;
