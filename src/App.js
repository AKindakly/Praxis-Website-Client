import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
import Contact from "./components/Contact/Contact";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<OurServices />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default App;
