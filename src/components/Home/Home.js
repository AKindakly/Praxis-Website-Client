import React from "react";

import NavTop from "../Layout/NavTop/NavTop";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Welcome from "./Welcome/Welcome";
import Statistics from "./Statistics/Statistics";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";
import Location from "./Location/Location";
import Footer from "../Layout/Footer/Footer";

const Home = () => {
    return (
        <div>
            <NavTop />
            <Hero />
            <Features />
            <Welcome />
            <Statistics />
            <Services />
            <Testimonial />
            <Location />
            <Footer />
        </div>
    );
};

export default Home;
