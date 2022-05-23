import { createContext, useContext, useState } from 'react';

const authContext = createContext();

export const { Provider } = authContext;
export const useAuthContext = () => {
    return useContext(authContext);
};

const CustomProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const valorDelContexto = {
        token,
        isAuthenticated,
        loginError,
        setToken,
        setIsAuthenticated,
        setLoginError,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
