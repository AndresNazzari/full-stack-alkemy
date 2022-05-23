import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../context/auth.context';

const PrivateRoute = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthContext();

    useEffect(() => {
        if (!isAuthenticated) {
            {
                navigate('/');
            }
        }
    }, [isAuthenticated, navigate]);

    return <Outlet />;
};

export default PrivateRoute;
