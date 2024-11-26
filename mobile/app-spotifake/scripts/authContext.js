import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [tokien, setTokien] = useState('');
    const [foto, setFoto] = useState('https://pbs.twimg.com/media/E2SCMoHWQAAKzZK.png');
    const [ngrok, setNgrok] = useState('https://b3fb-200-188-238-87.ngrok-free.app');
    const [userInfo, setUserInfo] = useState(null)

    return (
        <AuthContext.Provider value={{ tokien, setTokien, foto, setFoto, ngrok, setNgrok, userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};
