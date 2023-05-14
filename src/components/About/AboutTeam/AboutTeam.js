import React from "react";
import { Container } from "react-bootstrap";
import { TbActivityHeartbeat as BeatIcon } from "react-icons/tb";

import dentist from "../../../assets/dentist.png";
import dentist1 from "../../../assets/dentist1.png";
import dentist2 from "../../../assets/dentist2.png";

const teamData = [
    {
        id: 1,
        name: "Alex Muster",
        job: "Dentist",
        photo: dentist,
        smText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        name: "Alex Muster",
        job: "Endodontics Specialist",
        photo: dentist1,
        smText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        name: "Alex Muster",
        job: "Dental Nurse",
        photo: dentist2,
        smText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        name: "Alex Muster",
        job: "Pediatric Dentist",
        photo: dentist2,
        smText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const AboutTeam = () => {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center mt-5">
            <span className="fs-5 mb-3 mt-5">
                <BeatIcon className="fs-3" />
                Team
            </span>
            <h2 className="text-primary fs-1 pb-4">Our Dental Team</h2>
            <p className="fs-4 w-50 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
            </p>
            <Container>
                <div className="row justify-content-center text-center mb-5 mt-3">
                    {teamData.map((teamDatum) => (
                        <div key={teamDatum.id} className="col-md-3 mx-5 mb-5">
                            <img
                                src={teamDatum.photo}
                                alt={teamDatum.name}
                                height="300"
                            />
                            <h4 className="fs-3 text-primary mt-3">
                                {teamDatum.name}
                            </h4>
                            <h4 className="fs-4 mt-3">{teamDatum.job}</h4>
                            <p>{teamDatum.smText}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AboutTeam;
