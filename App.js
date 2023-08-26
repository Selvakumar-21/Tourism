import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import PlaceToVisit from "./components/PlaceToVisit";
import Nav from "./Nav";
import Place from "./Place";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Place/> } />
        <Route path="/PlaceToVisit" element={<PlaceToVisit /> } />
      </Routes>
    </div>
  );
}

export default App;