import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogout } from '../../services/auth'; // Import your logout function

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                await apiLogout();
                localStorage.removeItem('user'); // Clear session data
                navigate('/login'); // Redirect to login page
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };

        logout();
    }, [navigate]);

    return (
        <div className="text-center mt-4">
            <p>Logging out...</p>
        </div>
    );
};

export default LogoutPage;
