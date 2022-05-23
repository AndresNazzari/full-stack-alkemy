import React, { useEffect } from 'react';
import { useAuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            {
                navigate('/home');
            }
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <div>
                <h2>Log In</h2>
            </div>
            <div>
                <h2>Sign Up</h2>
            </div>
        </>
    );
};

export default Index;
