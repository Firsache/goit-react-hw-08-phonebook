import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsLoggedIn } from 'redux/auth/selectors';

function WithAuthRedirect(Component, navigateTo) {
  const ComponentWithRedirect = props => {
    const isLoggedIn = useSelector(selectedIsLoggedIn);

    return isLoggedIn ? <Component {...props} /> : <Navigate to={navigateTo} />;
  };

  return ComponentWithRedirect;
}

export default WithAuthRedirect;
