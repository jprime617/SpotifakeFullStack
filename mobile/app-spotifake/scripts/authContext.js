import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [tokien, setTokien] = useState('');
    const [foto, setFoto] = useState('https://pbs.twimg.com/media/E2SCMoHWQAAKzZK.png');
    const [ngrok, setNgrok] = useState('https://e4c9-189-8-205-19.ngrok-free.app');

    return (
        <AuthContext.Provider value={{ tokien, setTokien, foto, setFoto, ngrok, setNgrok }}>
            {children}
        </AuthContext.Provider>
    );
};
