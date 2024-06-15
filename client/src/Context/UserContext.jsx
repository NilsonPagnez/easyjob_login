import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(null);

    // Função para armazenar dados de login
    const login = (data) => {
        setAuthData(data);
        // Armazene os dados no localStorage para persistência
        localStorage.setItem('authData', JSON.stringify(data));
    };

    // Função para logout
    const logout = () => {
        setAuthData(null);
        localStorage.removeItem('authData');
        window.alert("logout")
    };

    // Carregar dados de autenticação do localStorage ao montar o componente
    useEffect(() => {
        const storedAuthData = localStorage.getItem('authData');
        if (storedAuthData) {
            setAuthData(JSON.parse(storedAuthData));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };