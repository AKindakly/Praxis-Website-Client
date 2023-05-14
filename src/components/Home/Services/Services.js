import React from "react";
import { Container } from "react-bootstrap";

import { TbActivityHeartbeat as BeatIcon } from "react-icons/tb";

import checkupsImgC from "../../../assets/checkups-color.png";
import implantsImgC from "../../../assets/implants-color.png";
import orthodonticsImgC from "../../../assets/orthodontics-color.png";
import protectionImgC from "../../../assets/protection-color.png";
import surgeryImgC from "../../../assets/surgery-color.png";
import whiteningImgC from "../../../assets/whitening-color.png";

const servicesData = [
    {
        id: 1,
        title: "Dental Implants",
        imageC: implantsImgC,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Teeth Whitening",
        imageC: whiteningImgC,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Orthodontics",
        imageC: orthodonticsImgC,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        title: "Dental Checkups",
        imageC: checkupsImgC,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 5,
        title: "Teeth Protection",
        imageC: protectionImgC,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 6,
        title: "Dental Surgery",
        imageC: surgeryImgC,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const Services = () => {
    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center "
            style={{
                marginTop: 100,
                marginBottom: 150,
            }}
        >
            <span className="fs-5 mb-3">
                <BeatIcon className="fs-3" /> Services
            </span>
            <h2 className="text-primary fs-1 mb-5">What We Provide</h2>
            <Container>
                <div className="row justify-content-center text-center mb-5">
                    {servicesData.map((serviceData) => (
                        <div
                            key={serviceData.id}
                            className="col-md-3 mx-5 service-anim "
                        >
                            <img
                                src={serviceData.imageC}
                                alt={serviceData.title}
                                height="150"
                            />
                            <h4 className="fs-3 text-primary mt-3">
                                {serviceData.title}
                            </h4>
                            <p>{serviceData.text}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
