import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Protected = ({ children, disabled }) => {
    const { user } = UserAuth();
    if (!disabled && !user) {
        return <Navigate to='/' />;
    }
    return children
}

export default Protected