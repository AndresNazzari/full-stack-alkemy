import { createContext, useContext, useState } from 'react';
const cartContext = createContext(); //me devuelve 2 componentes, Provider y Consumer. EL PROVIDER ES NECESARIO PARA ESCRIBIR EL CONTEXTO. EL CONTEXTO POR SI SOLO ES DE SOLO LECTURA

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
};

const CustomProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const addToken = (token) => {
        setToken(token);
    };

    const valorDelContexto = {
        token,
        addToken,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
