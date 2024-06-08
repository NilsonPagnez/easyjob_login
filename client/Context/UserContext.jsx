import React, { createContext, useState, useEffect } from 'react';

// Cria o contexto
export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Função para buscar dados da API
        const fetchData = async () => {
            try {
                const response = await fetch('URL_DA_SUA_API');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Erro ao buscar dados da API', error);
            }
        };

        fetchData();
    }, []);

    return (
        <UserProvider.Provider value={{ data }}>
            {children}
        </UserProvider.Provider>
    );
};

export default UserProvider;
