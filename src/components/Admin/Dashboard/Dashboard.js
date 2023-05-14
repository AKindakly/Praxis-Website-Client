import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBoard from "./NavBoard/NavBoard";
import WelcomeBoard from "./WelcomeBoard/WelcomeBoard";

const Dashboard = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <NavBoard />
                    </Col>
                    <Col md={9}>
                        <WelcomeBoard />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
