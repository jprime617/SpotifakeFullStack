import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [tokien, setTokien] = useState('');
    const [foto, setFoto] = useState('https://pbs.twimg.com/media/E2SCMoHWQAAKzZK.png')

    return (
        <AuthContext.Provider value={{ tokien, setTokien, foto, setFoto }}>
            {children}
        </AuthContext.Provider>
    );
};
