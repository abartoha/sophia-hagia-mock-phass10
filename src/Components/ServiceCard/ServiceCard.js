import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
    return (
        <div className="item col-12 col-md-4 col-lg-3">
            <div class="card-doctor">
                <div class="header">
                    <img src={props.services.img} alt="" />
                    <div class="meta">
                    </div>
                </div>
                <div class="body">
                    <p class="text-xl mb-0">
                        {props.services.name}
                    </p>
                    <span class="text-sm text-grey">
                        {props.services.doc}
                    </span>
                    <p class="text-sm text-grey fixed-height">
                        {props.services.desc}
                    </p>
                    <span className="text-md text-dark">
                        {props.services.cost}
                    </span>
                    <br />
                    <div className="btn btn-dark my-3">
                        <Link lassNmae="text-white text-decoration-none" to={"/services/"+props.services.name}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;