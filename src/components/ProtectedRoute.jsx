import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

    useEffect(() => {
        const checkAuth = () => {
            setIsAuthenticated(!!localStorage.getItem("token"));
        };

        window.addEventListener("storage", checkAuth); // Listen for localStorage changes

        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, []);
    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
    );
};

export default ProtectedRoute;