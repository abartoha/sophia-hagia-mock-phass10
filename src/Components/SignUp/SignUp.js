import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

//TODO
//Dark borders around the form - Done
//Already Reguistered? & New User? Links
//Sign Up with Google



const Signup = () => {
    const { newRegistration, regStrong, error } = useAuth();
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(false);

    const [newName, setNewName] = useState('');

    const handleEmailChange = (e) => {
        const emailNow = e.target.value;
        setNewEmail(emailNow);
    }
    const handlePasswordChange = (e) => {
        const passwordNow = e.target.value;
        if (regStrong.test(passwordNow)) {
            setPasswordStrength(true);
        }
        else {
            setPasswordStrength(false);
        }
        setNewPassword(passwordNow);
        console.log(passwordNow);
        console.log(passwordStrength);
    }
    const handleNameChange = (e) => {
        const nameNow = e.target.value;
        setNewName(nameNow);
    }
    const pressSignUp = (e) => {
        e.preventDefault();
        if (!regStrong.test(newPassword)) { //change to regStrong at enf by decision
            alert("Password doesn't meet standard requirements");
            return;
        }
        newRegistration(newEmail, newPassword, newName);
    }
    return (
        <div className="row h-vh p-0 m-0 d-flex justify-content-center align-items-center" >
            <Form className="border-login p-3 m-0 col-10 col-md-8 col-lg-6 text-left" onSubmit={pressSignUp}>
                <h1 className="text-center">Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>📑 Official Name</Form.Label>
                    <Form.Control type="name" onChange={handleNameChange} placeholder="John Doe" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>📬 Email</Form.Label>
                    <Form.Control type="email" onChange={handleEmailChange} placeholder="john.doe@gmail.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>🔐 Password</Form.Label>
                    <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Use Strong Password" required />
                    <Container className="p-0 my-3 requirement-text">
                        {
                            (!passwordStrength)
                                ?
                                <div className="text-danger">
                                    <h6 className="fw-bold">❗Password requirements❗</h6>
                                    <ol>
                                        <li>Minimum 6 characters to a maximum of 32 characters</li>
                                        <li>Minimum 1 lowercase character</li>
                                        <li>Minimum 1 uppercase character</li>
                                        <li>Minimum 1 decimal character</li>
                                        {/* <li>Minimum 1 special character</li> */}
                                    </ol>
                                </div>

                                :
                                <div className="bg-dark text-center pt-2 pb-1">
                                    <h6 style={{ color: "lightgreen" }}>👌 Password Healthy 👍</h6>
                                </div>
                        }
                    </Container>
                    <Container className="mb-3 p-0">
                        {
                            error.includes("email-already-in-use") ? <div className="text-danger">🔒 Email Already Registered</div> :
                                // error.includes("user-not-found") ? <div className="text-danger"></div> :
                                <div></div>
                        }
                    </Container>

                </Form.Group>
                <Button className="bg-dark m-auto p-auto" variant="primary" type="submit">
                    📝 Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Signup;