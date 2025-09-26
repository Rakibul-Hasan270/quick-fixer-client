import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p className='text-center mt-16 text-cyan-500'>Loading...</p>;
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivateRouter;