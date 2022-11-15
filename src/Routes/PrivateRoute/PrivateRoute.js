import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;