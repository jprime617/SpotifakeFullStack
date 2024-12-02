import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [tokien, setTokien] = useState('');
    const [foto, setFoto] = useState('https://i.pinimg.com/736x/41/a3/2e/41a32eb1acd6deeec6577d42260139a9.jpg');
    const [ngrok, setNgrok] = useState('https://b8e1-200-188-230-5.ngrok-free.app');
    const [userInfo, setUserInfo] = useState(null)

    return (
        <AuthContext.Provider value={{ tokien, setTokien, foto, setFoto, ngrok, setNgrok, userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};
