import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavBoard from "../NavBoard/NavBoard";

const EmployeesBoard = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <NavBoard />
                </Col>
                <Col md={9}>
                    <Card>
                        <Card.Header>Employees</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                You Can add or remove Employees here!
                            </Card.Title>
                            <Card.Text>
                                Here you can manage your patients, services, and
                                blog posts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EmployeesBoard;
