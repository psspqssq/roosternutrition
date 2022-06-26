import React from "react";

const style = {
  height: "100px",
  width: "100px",
};

const Logo = () => {
  return (
    <div>
      <img style={style} src={require("../../img/logo.jpg")} />
    </div>
  );
};

export default Logo;
