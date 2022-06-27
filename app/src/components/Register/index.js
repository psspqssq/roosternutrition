import React, { useState } from "react";

const registerStyle = {
  display: "inline-block",
  color: "red",
  padding: "5px",
};

const RegisterForm = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    console.log(e);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div style={registerStyle}>
      <label>
        Pen Number:<input type="text" name="penNumber" onChange={handleChange}></input>
      </label>
      <label>
        Pen Name:<input type="text" name="penName" onChange={handleChange}></input>
      </label>
    </div>
  );
};

export default RegisterForm;
