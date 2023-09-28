import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log({ password, email });
    }, [password, email]);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Login;
