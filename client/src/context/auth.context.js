import { createContext, useContext, useState } from 'react';

const authContext = createContext();

export const { Provider } = authContext;
export const useAuthContext = () => {
    return useContext(authContext);
};

const CustomProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const addToken = (token) => {
        setToken(token);
    };

    const authenticate = () => {
        setIsAuthenticated(!isAuthenticated);
    };
    const valorDelContexto = {
        token,
        isAuthenticated,
        addToken,
        authenticate,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
