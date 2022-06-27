import axios from "axios";
import React, { useEffect, useState } from "react";
import Pen from "../Pen";

const PenHouse = () => {
  const [pens, setPens] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_DBURL_PEN + "/all")
      .then((response) => {
        setPens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {pens.map((pen) => {
        return <Pen key={pen._id} pen={pen}></Pen>;
      })}
    </div>
  );
};

export default PenHouse;
