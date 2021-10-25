import React from 'react';
import { Link } from 'react-router-dom';

const WellDone = () => {
    return (
        <div>
            <div className="row h-vh p-0 m-0 d-flex justify-content-center align-items-center text-center" >
                <div style={{height:"200px;"}} className="border-login p-3 m-0 col-10 col-md-8 col-lg-6">
                    <h1>Check your mail</h1>
                    <p style={{textAlign:"justified"}}>
                        We have sent a verification mail to your inbox. You must confirm your authenticity and then move on to whatever you wanted to do here.
                    </p>
                    <Link to="/home">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WellDone;