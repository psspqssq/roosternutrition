import React from "react";
import Rooster from "../Rooster";

const Pen = (props) => {
  return (
    <div>
      <div>
        {props.pen.number} {props.pen.name}
      </div>
    </div>
  );
};

export default Pen;
