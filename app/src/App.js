import "./App.css";
import axios from "axios";
import PenHouse from "./components/PenHouse";
import Logo from "./components/Logo";
import { useState } from "react";

function App() {
  const url = "http://127.0.0.1:8080/api/rooster";
  const [chickenName, setChickenName] = useState("");
  const [chicken, setChicken] = useState([]);
  const handleInputChange = (e) => {
    setChickenName(e.target.value);
  };

  const handleInputClick = () => {
    axios
      .post(url, { name: chickenName })
      .then((response) => {
        console.log(response);
        axios
          .get(url + "/all")
          .then((response) => {
            console.log(response);
            setChicken(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <Logo></Logo>
      <PenHouse></PenHouse>
      <button onClick={handleInputClick}>Configure</button>
      <button>Hall Of Fame</button>
      <input onChange={handleInputChange}></input>
      <div>{chickenName}</div>
      <div>
        {chicken.map((a) => {
          return <div>{a.name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
