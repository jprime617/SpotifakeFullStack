import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [tokien, setTokien] = useState(null);

    return (
        <AuthContext.Provider value={{ tokien, setTokien }}>
            {children}
        </AuthContext.Provider>
    );
};
