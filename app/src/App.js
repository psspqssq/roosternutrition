import "./App.css";
import PenHouse from "./components/PenHouse";
import Logo from "./components/Logo";
import RegisterForm from "./components/Register";

function App() {
  return (
    <div className="App">
      <Logo></Logo>
      <PenHouse></PenHouse>
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default App;
