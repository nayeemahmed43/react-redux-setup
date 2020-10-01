import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
// import decode from 'jwt-decode';

const checkAuth = () => {
  // eslint-disable-next-line no-undef
  const token = localStorage.getItem('token');

  if (!token) {
    // return false;
    return true;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      checkAuth() ? (
            <Component {...props} />
      ) : (
                <Redirect to={{ pathname: '/login' }} />
      )
    )} />
);

export default AuthRoute;