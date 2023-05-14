import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
<<<<<<< HEAD
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
=======

import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";

>>>>>>> 6584e5d (trying Link after deploying issue)
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
