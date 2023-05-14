import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle login logic here
    };

    return (
        <div className="vh-100 d-flex justify-content-evenly align-items-center">
            <div className="fs-2">
                <p>Welcome to the Praxis Admin</p>
            </div>
            <div className="bg-primary text-white p-5">
                <h4 className="mb-4">Please Login to Continue</h4>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            required
                            onChange={handleUsernameChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
