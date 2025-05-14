import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        toast.error('Youalrady logged in!');
        return <Navigate to={redirectTo} />;
    }
    return Component;
}

export default RestrictedRoute;
