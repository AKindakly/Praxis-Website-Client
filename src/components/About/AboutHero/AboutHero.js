import React from "react";

import welcomeImg from "../../../assets/welcome-pic.png";
import { TbActivityHeartbeat as BeatIcon } from "react-icons/tb";

const AboutHero = () => {
    return (
        <section
            className="d-flex justify-content-around pt-5"
            style={{
                marginTop: 75,
                marginBottom: 100,
                marginLeft: 60,
                marginRight: 60,
            }}
        >
            <div className="d-flex flex-column align-items-start w-50 pt-5">
                <span className="fs-5 mb-3">
                    <BeatIcon className="fs-3" />
                    About Us
                </span>
                <h2 className="text-primary pb-4 fs-1">
                    Welcome to Our Clinic
                </h2>
                <p className="fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore tempor
                    incididunt ut labore et dolore magna aliqua.tempor
                    incididunt.
                </p>
                <p className="fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <p className="fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.tempor incididunt ut labore et dolore magna
                    aliqua.tempor incididunt.
                </p>
            </div>
            <div
                className="w-25"
                style={{
                    backgroundImage: `url(${welcomeImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "700px",
                }}
            ></div>
        </section>
    );
};

export default AboutHero;
