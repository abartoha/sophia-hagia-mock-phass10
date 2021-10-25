import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ServicePage = () => {
    const name = useParams();
    const { services } = useAuth();
    const service = services.filter(x => x.name === name.serviceID)[0];
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">
                        {service.name}
                    </h1>
                    <h3 className="text-center text-info">
                        {service.subtitle}
                    </h3>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-5">
                    <img className="img-fluid" src={service.img} alt="" />
                </div>
                <div className="col-12 col-md-6 col-lg-9 p-5">
                    {service.description}
                    <br />
                    Cost: {service.cost}
                    <br />
                    service charges not included in the price
                </div>
            </div>
        </div>
    );
};

export default ServicePage;