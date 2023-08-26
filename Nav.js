import React from "react";
import {Link} from "react-router-dom";
import "./Style/Nav.css";

const Nav = () => {
    return (
        <header >
            <h3 className="log">TAMILNADU TOURISM</h3>
            <nav className="items">
                <a><Link to = "/">Home</Link></a>
                <a><Link to = "/PlaceToVisit">Places To Visit</Link></a>
                <a><Link to = "/BestTimeToVisit">Best Time To Visit</Link></a>
                <a><Link to = "/Packages">Packages</Link></a>
                <a><Link to = "/Destination">Destination</Link></a>
                <a><Link to = "/Food">Food</Link></a>
            </nav>
        </header>
    );
};

export default Nav;