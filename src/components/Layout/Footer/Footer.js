import React from "react";
import { Container } from "react-bootstrap";

import {
    FaFacebookF as FaceIcon,
    FaInstagram as InstaIcon,
    FaTwitter as TwitIcon,
    FaPhoneAlt as PhoneIcon,
    FaMapMarkerAlt as MarkerIcon,
    FaEnvelope as EmailIcon,
} from "react-icons/fa";
import logo from "../../../assets/pearly-whites-logo-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
    // const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-primary bg-gradient text-light">
                <Container fluid className="py-5">
                    <div className="row ">
                        <div className="col" style={{ paddingLeft: 75 }}>
                            <img
                                src={logo}
                                alt="Praxis Logo"
                                width="265"
                                height="35"
                                className="mb-3"
                            />
                            <div className="d-flex fs-4 text-center">
                                <a href="https://www.instagram.com/">
                                    <InstaIcon className="text-white me-3" />
                                </a>
                                <a href="https://www.facebook.com/">
                                    <FaceIcon className="text-white me-3" />
                                </a>
                                <a href="https://www.twitter.com/">
                                    <TwitIcon className="text-white" />
                                </a>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5>Explore</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link
                                        to="/about"
                                        className="text-white text-decoration-none"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-white text-decoration-none"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-white text-decoration-none"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5>Policies</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="/privacy"
                                        className="text-white text-decoration-none"
                                    >
                                        Privacy &amp; Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/terms"
                                        className="text-white text-decoration-none"
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Contact</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <PhoneIcon className="me-3" />
                                    +1 123 456 789
                                </li>
                                <li>
                                    <EmailIcon className="me-3" />
                                    info@PearlyWhites.com
                                </li>
                                <li>
                                    <MarkerIcon className="me-3" />
                                    123 Main St, Anytown USA
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
