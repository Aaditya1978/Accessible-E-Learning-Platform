import React, { useState } from "react";
import { Navbar, Form, } from "react-bootstrap";
import "./loginsignup.css";

function LoginSignup() {
    const [validated, setValidated] = useState(false);
    const [studentsingnupform, setStudentSignupform] = useState(false);
    const [loginform, setLoginform] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);

    const handleStudentSignupSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleTeacherSignupSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            event.stopPropagation();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: "Aadi",
                    last_name: "singhal",
                    email: "aadi@gmail.com",
                    org_name: "JMIT",
                    password: "aadi123",
                }),
            };
            fetch('/api/user_login', requestOptions).then((response) => response.json())
                .then((data) => console.log("hello"));
        }

        setValidated(true);
    };

    const handleLoginSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleforgotSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setForgotPassword(false);
            setNewPassword(true);
        }

        setValidated(true);



    };


    function showsignupform() {
        setLoginform(false);
    }

    function showloginform() {
        setForgotPassword(false);
        setLoginform(true);
    }

    function showteachersignupform() {
        if (studentsingnupform === true) {
            setStudentSignupform(false);
        }
    }
    function showstudentsignupform() {
        if (studentsingnupform === false) {
            setStudentSignupform(true);
        }
    }

    function showforgotpasswordform() {
        event.preventDefault();
        event.stopPropagation();
        setForgotPassword(true);
        setLoginform(false);
    }

    function returnteachersignupform() {
        return (
            <>
                <h6 className="msg-info">Please Create a New account As Teacher</h6>
                <Form noValidate validated={validated} onSubmit={handleTeacherSignupSubmit}>
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter First Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Last Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Organization Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Organization Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter valid Organization Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter same Password as above.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="row justify-content-center my-3 px-3"> <button type="submit" className="btn-block btn-color">Sign Up</button> </div>
                </Form>
            </>);
    }

    function returnstudentsingnupform() {
        return (
            <>
                <h6 className="msg-info">Please Create a New account As Student</h6>
                <Form noValidate validated={validated} onSubmit={handleStudentSignupSubmit}>
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter First Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Last Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Class Code</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Class Code to Join"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter valid Class Code.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustomUsername">
                        <Form.Label>confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter same Password as above.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="row justify-content-center my-3 px-3"> <button type="submit" className="btn-block btn-color">Sign Up</button> </div>
                </Form>
            </>
        );
    }

    function returnsignupform() {
        return (
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="../../static/images/logo3.png" /> </div>
                        <h3 className="mb-1 text-center heading">E-Learning</h3>
                        <div className="justify-content-center togg">
                            <div onClick={showteachersignupform} className={`tog ${studentsingnupform ? "" : "active"}`}>Teacher</div>
                            <div onClick={showstudentsignupform} className={`tog ${studentsingnupform ? "active" : ""}`}>Student</div>
                        </div>
                        <br />
                        {!studentsingnupform && returnteachersignupform()}
                        {studentsingnupform && returnstudentsingnupform()}

                    </div>
                </div>
                <div className="bottom text-center mb-5">
                    <p href="#" className="sm-text mx-auto mb-3">Already have an account? <button type="button" onClick={showloginform} className="btn btn-white ml-2">Log In</button></p>
                </div>
            </div>
        );
    }

    function returnloginform() {
        return (
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="../../static/images/logo3.png" /> </div>
                        <h3 className="mb-1 text-center heading">E-Learning</h3>
                        <h6 className="msg-info">Please login to your account</h6>
                        <Form noValidate validated={validated} onSubmit={handleLoginSubmit}>
                            <Form.Group md="4" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter valid Email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group md="4" controlId="validationCustomUsername">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="row justify-content-center my-3 px-3"> <button type="submit" className="btn-block btn-color">Log In</button> </div>
                        </Form>
                        <div className="row justify-content-center my-2"> <a href=""><small onClick={showforgotpasswordform} className="text-muted">Forgot Password?</small></a> </div>
                    </div>
                </div>
                <div className="bottom text-center mb-5">
                    <p href="" className="sm-text mx-auto mb-3">Don't have an account? <button type="button" onClick={showsignupform} className="btn btn-white ml-2">Create new</button></p>
                </div>
            </div>
        );
    }

    function returnforgotpasswordform() {
        return (
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="../../static/images/logo3.png" /> </div>
                        <h3 className="mb-1 text-center heading">E-Learning</h3>
                        <h6 className="msg-info">Please Enter Details</h6>
                        <Form noValidate validated={validated} onSubmit={handleforgotSubmit}>
                            <Form.Group md="4" controlId="validationCustomUsername">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter valid Email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <div className="row justify-content-center my-3 px-3"> <button type="submit" className="btn-block btn-color">Next</button> </div>
                        </Form>
                    </div>
                </div>
                <div className="bottom text-center mb-5">
                    <p href="" className="sm-text mx-auto mb-3"><button type="button" onClick={showloginform} className="btn btn-white ml-2">Go Back</button></p>
                </div>
            </div>
        );
    }

    function returnnewpasswordform() {
        return (
            <div className="card card1">
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                        <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="../../static/images/logo3.png" /> </div>
                        <h3 className="mb-1 text-center heading">E-Learning</h3>
                        <h6 className="msg-info">Please Enter New Password</h6>
                        <Form noValidate validated={validated} onSubmit={handleforgotSubmit}>
                            <Form.Group md="4" controlId="validationCustomUsername">
                                <Form.Label>OTP</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter OTP"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter valid OTP.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group md="4" controlId="validationCustomUsername">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Password"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <br />
                            <Form.Group md="4" controlId="validationCustomUsername">
                                <Form.Label>confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter same Password as above.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="row justify-content-center my-3 px-3"> <button type="submit" className="btn-block btn-color">Confirm</button> </div>
                        </Form>
                    </div>
                </div>
                <div className="bottom text-center mb-5">
                    <p href="" className="sm-text mx-auto mb-3"><button type="button" onClick={showforgotpasswordform} className="btn btn-white ml-2">Go Back</button></p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* NavBar Element */}
            <Navbar collapseOnSelect className="color-nav" expand="lg" variant="dark">
                <Navbar.Brand className="NavHead" href="">
                    E-Learning Platform
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>

            {/* Container Element */}
            <div className="container px-4 py-5 mx-auto">
                <div className="card card0">
                    <div className="d-flex flex-lg-row flex-column-reverse">
                        {loginform && !forgotPassword && returnloginform()}

                        {!loginform && !forgotPassword && !newPassword && returnsignupform()}

                        {!loginform && forgotPassword && returnforgotpasswordform()}

                        {!loginform && !forgotPassword && newPassword && returnnewpasswordform()}

                        <div className="card card2">
                            <div className="my-auto mx-md-5 px-md-5 right">
                                <h5 className="text-white">We are more than e-learning Platform</h5>
                                <small className="text-white">
                                    Here we provide you the best of best resourcs available to make you
                                    excle at your learning. We are here to help you. We are here to make
                                    you a better learner.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LoginSignup;
