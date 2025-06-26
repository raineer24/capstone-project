export interface User {
    id: string;
    name: string;
    role: 'admin' | 'seller' | 'customer';
    avatar: string;
    username: string;
}

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<boolean>;
    logout: () => void;
}

export interface Message {
    id: number;
    sender: string;
    content: string;
    time: string;
    isOwn: boolean;
    role: string;
}