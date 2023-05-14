import React from "react";

import NavTop from "../Layout/NavTop/NavTop";
import Footer from "../Layout/Footer/Footer";
import Title from "../Layout/Title/Title";
import AboutHero from "./AboutHero/AboutHero";
import AboutTeam from "./AboutTeam/AboutTeam";
import Statistics from "../Home/Statistics/Statistics";

const About = () => {
    return (
        <div>
            <NavTop />
            <Title />
            <AboutHero />
            <Statistics />
            <AboutTeam />
            <Footer />
        </div>
    );
};

export default About;
