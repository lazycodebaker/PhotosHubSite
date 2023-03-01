
import { AuthContextProps, AuthContextType, UserType } from '@/Helpers/Types&Interface';
import React, { createContext } from 'react';


export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider : React.FC<AuthContextProps> = ({ children }) => {
    const [user, setUser] = React.useState<UserType>({ UserId: 0, UserName: "", UserEmail: "", IsLoggedIn: false });
    
    const Login = (username: string) => {
        setUser({
            UserId: 1, UserName: username, UserEmail: "", IsLoggedIn: true
        });
    };

    const Logout = () => {
        setUser({ UserId: 0, UserName: "", UserEmail: "", IsLoggedIn: false });
    };

    return (
        <AuthContext.Provider value={{ user, setUser, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;