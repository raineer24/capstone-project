import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import { User, LoginCredentials, AuthContextType} from '../types/auth';
import { authService } from '../services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [] = useState();
    const [] = useState();


    useEffect(()) => {}
}