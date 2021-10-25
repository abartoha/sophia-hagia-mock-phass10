import React from "react";
import useAuth from "../../hooks/useAuth";

//TODO
//Make a functional dashboard!
//Must be able to edit name, email and photo(?)

const Dash = () => {
    const { user } = useAuth();
    return (
        <div className="row p-0 my-5 d-flex justify-content-center align-items-center" >
            <div className="col-11 col-md-9 col-lg-7">
                <h1 style={{ fontSize: "3.5em" }}>Dashboard</h1>
                <p style={{ fontSize: "1.2em" }}>View Profile Informations</p>
                <div className="profile-box p-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <ul style={{ fontSize: "1.4em" }} className="text-left m-0 px-auto">
                        {/* <li>Auth Provider: {user.providerId}</li> */}
                        {/* <li>{user.photoURL}</li> */}
                        {/* <li>{user.displayName} </li> */}
                        <li>Email: {user.email} </li>
                        <li>Email Verified? : {user.emailVerified ? <span className="text-success">Yes</span> : <span className="text-danger">No</span>}</li>
                    </ul>
                    <div style={{ backgroundColor: "black" }} className="d-flex flex-column p-2 m-5 m-md-0">
                        <img style={{ filter: "contrast(120%)" }} className="dashboard-picture" src={user.photoURL} alt="No DP" />
                        {user.displayName ? <span className="text-white display-name">{user.displayName}</span> : <span className="text-danger">Name N/A</span>}
                    </div>
                </div>
            </div>
            <div class="page-section">
                <div class="container">
                    <h1 class="text-center wow fadeInUp">Make an Appointment</h1>

                    <form class="main-form" onSubmit={() => { alert("Feature under maintainance") }}>
                        <div class="row mt-5 ">
                            <div class="col-12 col-sm-6 py-2 wow fadeInLeft">
                                <input type="text" class="form-control" placeholder="Full name" />
                            </div>
                            <div class="col-12 col-sm-6 py-2 wow fadeInRight">
                                <input type="text" class="form-control" placeholder="Email address.." />
                            </div>
                            <div class="col-12 col-sm-6 py-2 wow fadeInLeft" data-wow-delay="300ms">
                                <input type="date" class="form-control" />
                            </div>
                            <div class="col-12 col-sm-6 py-2 wow fadeInRight" data-wow-delay="300ms">
                                <select name="departement" id="departement" class="custom-select">
                                    <option value="general">General Health</option>
                                    <option value="cardiology">Cardiology</option>
                                    <option value="dental">Dental</option>
                                    <option value="neurology">Neurology</option>
                                    <option value="orthopaedics">Orthopaedics</option>
                                </select>
                            </div>
                            <div class="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <input type="text" class="form-control" placeholder="Number.." />
                            </div>
                            <div class="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                                <textarea name="message" id="message" class="form-control" rows="6" placeholder="Enter message.."></textarea>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary mt-3 wow zoomIn">Submit Request</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dash;