import { React, useState } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//TODO
//Dark borders around the form

const Login = () => {
    const { signInUsingGoogle, regStrong, handleLogin, error } = useAuth();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [passStrngth, setPassStrngth] = useState(false);

    const handleLoginEmailChange = (e) => {
        const emailNow = e.target.value;
        setLoginEmail(emailNow);
    }
    const handleLoginPasswordChange = (e) => {
        const passwordNow = e.target.value;
        setLoginPassword(passwordNow);
        if (regStrong.test(loginPassword) && loginEmail !== "") {
            setPassStrngth(true);
        }
        else{
            setPassStrngth(false);
        }
    }
    const pressLogin = (e) => {
        e.preventDefault();
        handleLogin(loginEmail, loginPassword);
    }
    return (
        <div className="row h-vh p-0 m-0 d-flex justify-content-center align-items-center" >
            <Form className="border-login p-3 m-0 col-10 col-md-8 col-lg-6 text-left" onSubmit={pressLogin}>
                <h1 className="text-center">Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>📩 Email</Form.Label>
                    <Form.Control onChange={handleLoginEmailChange} type="email" placeholder="john.doe@gmail.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>🔑 Password</Form.Label>
                    <Form.Control onChange={handleLoginPasswordChange} type="password" placeholder="johNdoe1850" required />
                </Form.Group>

                <Container className="mb-3 p-0">
                    {
                        error.includes("wrong-password") ? <div className="text-danger">❌ Wrong Password</div> :
                            error.includes("user-not-found") ? <div className="text-danger">❓ No user with this email</div> :
                                passStrngth ? <div className="text-success">💪 Password Stronk Enuf</div>
                                    : <div className="text-danger">😭 Password Not Strong/ No email/Password Empty</div>
                    }
                </Container>

                <Row >
                    <Button disabled={!passStrngth} className="col-5 bg-dark m-auto p-auto fs-6" variant="primary" type="submit" >
                        🚪 Login
                    </Button>
                    <Button as={Link} to="/reset-your-password-here-right-nwo-right-away-ll-aboard-get-ready-sit-tight" className="col-5 bg-dark m-auto p-auto text-nowrap fs-6" variant="primary">
                        Reset 🔑
                    </Button>
                </Row>

                <div className="my-3 mx-auto px-auto text-center">
                    🤔 or 😲
                </div>

                <Container className="d-flex justify-content-center align-items-center">
                    <Button className="transparent-button" onClick={signInUsingGoogle}>
                        {/* google svg icon */}
                        {/* https://commons.wikimedia.org/wiki/Category:Google_SVG_logos */}
                        <svg className="svg-default" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                            </g>
                        </svg>
                    </Button>
                </Container>
            </Form>
        </div>
    );
};

export default Login;