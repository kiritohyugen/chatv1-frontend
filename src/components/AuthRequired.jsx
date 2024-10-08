import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { validateToken } from '../api';

export default function AuthRequired() {
    const [isLoggedIn, setIsLoggedIn] = useState(null); // Set to null initially to indicate loading state
    const token = localStorage.getItem('token');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await validateToken(token);
                setIsLoggedIn(response.data.success);
            } catch (error) {
                console.error("Token Validation Error:", error);
                setIsLoggedIn(false); // Set to false if there is an error
            }
        };

        checkAuth();
    }, [token]);

    // If isLoggedIn is null, we are still checking the token
    if (isLoggedIn === null) {
        return <div>Loading...</div>; // Show loading state or a spinner
    }

    // Redirect to login if not logged in
    if (!isLoggedIn) {
        return <Navigate to="" />;
    }

    return <Outlet />;
}
