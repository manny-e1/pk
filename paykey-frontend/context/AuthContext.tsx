// context/AuthContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '@/services/authService';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, isLoading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initAuth = async () => {
            try {
                // Cek Session ke Backend
                const response = await authService.me();
                if (response.success) {
                    setUser(response.user);
                } else {
                    throw new Error("Invalid session");
                }
            } catch (error) {
                // Jika API melempar 401, middleware mungkin lolos (karena cookie ada tapi expired/invalid)
                // Jadi kita handle di sini sebagai layer kedua
                console.error("Auth check failed", error);
                // router.push('/login'); // Opsional, middleware biasanya sudah handle
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, [router]);

    return (
        <AuthContext.Provider value={{ user, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);