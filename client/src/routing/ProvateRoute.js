import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuthContext } from './context/auth.context';

const PrivateRoute = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
        if (!isAuthenticated) {
            return <>{navigate('/')}</>;
        }
    });

    return <Outlet />;
};

export default PrivateRoute;
