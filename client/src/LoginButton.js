import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, initializeAuth, finishAuthentication } from './AuthService';

const LoginButton = () => {
    const navigate = useNavigate();

    useEffect(() => {
        initializeAuth();
    }, []);

    const handleLogin = async () => {
        try {
            await login();
            await finishAuthentication();
            navigate('/pokemonlist');  // Navigate to the main content after login
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
