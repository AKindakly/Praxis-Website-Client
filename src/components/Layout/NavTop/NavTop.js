import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import {
    FaPhoneAlt as PhoneIcon,
    FaMapMarkerAlt as MarkerIcon,
    FaClock as ClockIcon,
} from "react-icons/fa";
import logo from "../../../assets/pearly-whites-logo.png";
import { Link } from "react-router-dom";

const NavTop = () => {
    return (
        <>
            <Container fluid className="bg-primary text-white py-2">
                <div className="d-flex justify-content-around fs-6">
                    <div>
                        <span>
                            <PhoneIcon className="me-2 align-self-center" />
                            +123 456 789 &nbsp;|&nbsp;&nbsp;
                            <MarkerIcon /> 123 Main St, City
                        </span>
                    </div>
                    <div>
                        <span>
                            <ClockIcon /> &nbsp; Mon - Fri: 09:00 - 17:00
                        </span>
                    </div>
                </div>
            </Container>
            <Navbar bg="light" expand="lg" className="py-4" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="300"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link
                                href="/about"
                                className="mx-4 text-primary"
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                href="/services"
                                className="mx-4 text-primary"
                            >
                                Services
                            </Nav.Link>
                            <Nav.Link
                                href="/contact"
                                className="mx-4 text-primary"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Link to="/about">HELLO</Link>
            </Navbar>
        </>
    );
};

export default NavTop;
