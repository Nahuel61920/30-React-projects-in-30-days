import "./App.css";
import { Navbar } from "react-bootstrap";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        collapseOnSelect
        className="p-3"
      >
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
      </Navbar>
      <Cards />
    </div>
  );
}

export default App;
