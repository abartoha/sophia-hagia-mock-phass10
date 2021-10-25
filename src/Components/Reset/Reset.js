import React from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";


const Reset = () => {
    const { resetPassword } = useAuth();
    const pressReset = (e) => {
        e.preventDefault();
        resetPassword();
    }
    return (
        <div className="row h-vh p-0 m-0 d-flex justify-content-center align-items-center" >
            <Form className="border-login p-3 m-0 col-7 col-md-6 col-lg-5 text-left" onSubmit={pressReset}>
                <h1 className="text-center">Reset password</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter account email</Form.Label>
                    {/* <p className="text-warning">No other email will work in this case</p> */}
                    <Form.Control type="email" placeholder="john.doe@gmail.com" required />
                </Form.Group>
                <Button className="bg-dark m-auto p-auto" variant="primary" type="submit">
                    Confirm Reset Email
                </Button>
            </Form>
        </div>
    );
};

export default Reset;