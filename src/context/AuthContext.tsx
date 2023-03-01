
import { AuthContextProps, AuthContextType, UserType } from '@/Types/Types&Interface';
import React, { createContext } from 'react';

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [user, setUser] = React.useState<UserType>({ UserId: 0, UserName: "", UserEmail: "", IsLoggedIn: false });

    const Login = (username: string) => {
        setUser({
            ...user,
            IsLoggedIn: true,
        });
        return;
    };

    const Register = (username: string, password: string) => {
        setUser({
            ...user,
            IsLoggedIn: true,
        });
        return;
    };

    const Logout = () => {
        setUser({
            ...user,
            IsLoggedIn: false,
        });
        return;
    };


    return (
        <AuthContext.Provider value={{ user, setUser, Login, Logout, Register }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;