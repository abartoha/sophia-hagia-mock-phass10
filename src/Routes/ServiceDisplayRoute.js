import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ServiceDisplayRoute = ({ children, ...rest }) => {
    const { isLoggedIn } = useAuth();
    return (
        <Route
            {...rest}
            render={() =>
                (isLoggedIn) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
};

export default ServiceDisplayRoute;