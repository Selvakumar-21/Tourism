import React from "react";

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

const Place = () => {
    return (
        <div>
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
};

export default Place;
