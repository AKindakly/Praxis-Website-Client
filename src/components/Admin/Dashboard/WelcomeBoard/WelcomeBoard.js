import React from "react";
import { Card } from "react-bootstrap";

const WelcomeBoard = () => {
    return (
        <Card>
            <Card.Header>Dashboard</Card.Header>
            <Card.Body>
                <Card.Title>Welcome to your dentist dashboard!</Card.Title>
                <Card.Text>
                    Here you can manage your patients, services, and blog posts.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WelcomeBoard;
