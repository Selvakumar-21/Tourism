import React from "react";
import {Link} from "react-router-dom";
import "./Style/Nav.css";

const Nav = () => {
    return (
        <header >
            <h3 className="log">TAMILNADU TOURISM</h3>
            <nav className="align">
                <Link to = "/" className="hi">Home</Link>
                <Link to = "/PlaceToVisit" className="hi">Places To Visit</Link>
                <Link to = "/TimeToVisit" className="hi">Best Time To Visit</Link>
                <Link to = "/Packages" className="hi">Packages</Link>
                <Link to = "/Destination" className="hi">Destination</Link>
                <Link to = "/Food" className="hi">Food</Link>
            </nav>
        </header>
    );
};

export default Nav;