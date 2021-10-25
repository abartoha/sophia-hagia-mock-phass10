import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="page-footer">
                <div class="container">
                    <div class="row px-md-3">
                        <div class="col-sm-6 col-lg-4 py-3">
                            <h5>Company</h5>
                            <ul class="footer-menu">
                                <li><span>About Us</span></li>
                                <li><span>Career</span></li>
                                <li><span>Editorial Team</span></li>
                                <li><span>Protection</span></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-4 py-3">
                            <h5>More</h5>
                            <ul class="footer-menu">
                                <li><span>Terms & Condition</span></li>
                                <li><span>Privacy</span></li>
                                <li><span>Advertise</span></li>
                                <li><span>Join as Doctors</span></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-4 py-3">
                            <h5>Contact</h5>
                            <p class="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
                            <span class="footer-link">701-573-7582</span>
                            <span class="footer-link">healthcare@temporary.net</span>
                        </div>
                    </div>

                    <hr/>

                    <p id="copyright">Copyright &copy; 2021 All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;