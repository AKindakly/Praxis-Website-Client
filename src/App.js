import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Admin from "./components/Admin/Admin";
import About from "./components/About/About";
import OurServices from "./components/OurServices/OurServices";
// import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
// import EmployeesBoard from "./components/Admin/Dashboard/EmployeesBoard/EmployeesBoard";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<OurServices />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* 
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard1" element={<EmployeesBoard />} /> */}
        </Routes>
    );
};

export default App;
