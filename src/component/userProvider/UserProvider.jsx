import React, { useState, useEffect } from 'react';
import UserContext from '../userContext/UserContext';
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../utilities/fakeDB';
import { useNavigate } from 'react-router-dom';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        const currentUser = getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    useEffect(() => {
        if (message) {
            const timeoutId = setTimeout(() => {
                setMessage('');
            }, 5000); // Clear message after 5 seconds

            return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
        }
    }, [message]);

    const handleLogin = (username, password) => {
        try {
            loginUser(username, password);
            setUser(username);
            setMessage('Login successful!');
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleRegister = (username, password) => {
        try {
            registerUser(username, password);
            setMessage('Registration successful!');
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleLogout = () => {
        logoutUser();
        setUser(null);
       
        setMessage('Logout successful');
    };

    return (
        <UserContext.Provider value={{ user, handleLogin, handleRegister, handleLogout, message, setMessage }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
