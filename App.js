import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Nav.css";
import './App.css';
import Scroll from "./components/Scroll";
import Home from "./components/Home";
import Chennai from "./components/Chennai";
import Rameswaram from "./components/Rameswaram";
import Kodaikanal from "./components/Kodaikanal";
import Ooty from "./components/Ooty";
import Kanyakumari from "./components/Kanyakumari"
import Kumbakonam from "./components/Kumbakonam";
import Madurai from "./components/Madurai";
import Yarcaud from "./components/Yarcaud";
import Theni from "./components/Theni";
import Hogenakkal from "./components/Hogenakkal";


function App() {
  return (
    <div className="App">
      <header >
        <h3 className="log">TAMILNADU TOURISM</h3>
        <nav className="items">
          <a><Link to = "/">Home</Link></a>
          <a><Link to = "/PlacesToVisit">Places To Visit</Link></a>
          <a><Link to = "/BestTimeToVisit">Best Time To Visit</Link></a>
          <a><Link to = "/Packages">Packages</Link></a>
          <a><Link to = "/Destination">Destination</Link></a>
          <a><Link to = "/Food">Food</Link></a>
        </nav>
      </header>
      <Home />
      <Scroll />
      <Chennai />
      <Rameswaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni />
      <Hogenakkal />
    </div>
  );
}

export default App;