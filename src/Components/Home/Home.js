import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
// photos 
import introdoctor from "../../images/bg-doctor.png";
import doctor1 from "../../images/doctors/doctor_1.jpg";
import doctor2 from "../../images/doctors/doctor_2.jpg";
import doctor3 from "../../images/doctors/doctor_3.jpg";
import mobileApp from "../../images/mobile_app.png";
import playStore from "../../images/google_play.svg";
import appStore from "../../images/app_store.svg";
// useAuth 
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const {services} = useAuth();
    return (
        <div>
            <div
                class="page-hero bg-image overlay-dark page-hero-bg"
            >
                <div class="hero-section">
                    <div class="container text-center wow zoomIn">
                        <span class="subhead">Let's make your life happier</span>
                        <h1 class="display-4">Healthy Living</h1>
                        <div class="btn btn-primary">
                            Let's Consult
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section pb-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 py-3 my-3 wow fadeInUp">
                            <h1>Welcome to Your Health <br /> Center</h1>
                            <p class="text-grey mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                            <a href="about.html" class="btn btn-primary">Learn More</a>
                        </div>
                        <div class="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                            <div class="img-place custom-img-1 my-3">
                                <img src={introdoctor} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <h1 class="text-center mb-5 wow fadeInUp">Our Doctors</h1>

                    <div class="owl-carousel row wow fadeInUp" id="doctorSlideshow">
                        <div class="item col-12 col-md-4 col-lg-3">
                            <div class="card-doctor">
                                <div class="header">
                                    <img src={doctor1} alt="" />
                                    <div class="meta">
                                    </div>
                                </div>
                                <div class="body">
                                    <p class="text-xl mb-0">Dr. Stein Albert</p>
                                    <span class="text-sm text-grey">Cardiology</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-12 col-md-4 col-lg-3">
                            <div class="card-doctor">
                                <div class="header">
                                    <img src={doctor2} alt="" />
                                    <div class="meta">
                                    </div>
                                </div>
                                <div class="body">
                                    <p class="text-xl mb-0">Dr. Alexa Melvin</p>
                                    <span class="text-sm text-grey">Dental</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-12 col-md-4 col-lg-3">
                            <div class="card-doctor">
                                <div class="header">
                                    <img src={doctor3} alt="" />
                                    <div class="meta">
                                    </div>
                                </div>
                                <div class="body">
                                    <p class="text-xl mb-0">Dr. Rebecca Steffany</p>
                                    <span class="text-sm text-grey">General Health</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-12 col-md-4 col-lg-3">
                            <div class="card-doctor">
                                <div class="header">
                                    <img src={doctor1} alt="" />
                                    <div class="meta">
                                    </div>
                                </div>
                                <div class="body">
                                    <p class="text-xl mb-0">Dr. Rebecca Steffany</p>
                                    <span class="text-sm text-grey">General Health</span>
                                </div>
                            </div>
                        </div>
                        <div class="item col-12 col-md-4 col-lg-3">
                            <div class="card-doctor">
                                <div class="header">
                                    <img src={doctor2} alt="" />
                                    <div class="meta">
                                    </div>
                                </div>
                                <div class="body">
                                    <p class="text-xl mb-0">Dr. Rebecca Steffany</p>
                                    <span class="text-sm text-grey">General Health</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                // here lies the entire services section 

            }

            <div class="page-section">
                <div class="container">
                    <h1 class="text-center mb-5 wow fadeInUp">Our Services</h1>

                    <div class="owl-carousel row wow fadeInUp" id="doctorSlideshow">
                        {
                            services.map(services => <ServiceCard services={services}></ServiceCard>).slice(0,8)
                        }
                    </div>
                </div>
            </div>

            <div class="page-section">
                <div class="container">
                    <h1 class="text-center wow fadeInUp">Our Location</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1328.8533939009972!2d90.43464504966371!3d23.762857948642576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f5f55eb19b%3A0x26326709dca4d41f!2sNational%20Ideal%20School%20(Banasree%20Campus%3A%201)!5e0!3m2!1sen!2sbd!4v1634551968618!5m2!1sen!2sbd" height="450" style={{border:0, width:"100%"}} title="Location" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

            <div class="page-section banner-home bg-image bg-banner-app">
                <div class="container py-5 py-lg-0">
                    <div class="row align-items-center">
                        <div class="col-12 col-lg-5 wow zoomIn">
                            <div class="img-banner my-5 d-lg-block">
                                <img src={mobileApp} alt="" />
                            </div>
                        </div>
                        <div class="row col-12 col-lg-7 px-auto wow fadeInRight">
                            <h1 class="col-12 font-weight-normal">Get easy access of all features using One Health Application</h1>
                            <div className="my-3 p-0 m-0 col-12 col-md-6">
                                <img src={playStore} alt="" />
                            </div>
                            <div class="my-3 p-0 m-0 col-12 col-md-6">
                                <img src={appStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
