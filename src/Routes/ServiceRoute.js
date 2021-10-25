import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ServiceRoute = ({ children, ...rest }) => {
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

export default ServiceRoute;