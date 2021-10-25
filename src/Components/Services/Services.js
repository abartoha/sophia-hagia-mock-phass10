import React from 'react';
import useAuth from '../../hooks/useAuth';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const {services} = useAuth();
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">
                        Services
                    </h1>
                    <h3 className="text-center">
                        Here are our full range of services that we are eagerly offering
                    </h3>
                </div>
                <div className="row col-12 m-md-5 p-5">
                    {
                        services.map(services => <ServiceCard services={services}></ServiceCard>)
                    }
                </div>
                <div className="col-12">
                    <p className="text-center">
                        Remember, service charges not included
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;