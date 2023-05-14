import React from "react";
import { Nav } from "react-bootstrap";

const NavBoard = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/dashboard1">Employees</Nav.Link>
            <Nav.Link href="#services">Services Management</Nav.Link>
        </Nav>
    );
};

export default NavBoard;
