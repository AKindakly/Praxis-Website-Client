import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Title = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Container fluid className="bg-primary text-white bg-gradient py-5">
            <div className="d-flex justify-content-around align-items-center">
                <div className="fs-1">
                    <span>
                        {path === "/about" && <span>About</span>}
                        {path === "/services" && <span>Services</span>}
                        {path === "/contact" && <span>Contact</span>}
                    </span>
                </div>
                <div className="fs-5">
                    <Link className="text-decoration-none text-reset" to="/">
                        Home&nbsp;
                    </Link>
                    <span>{path}</span>
                </div>
            </div>
        </Container>
    );
};

export default Title;
