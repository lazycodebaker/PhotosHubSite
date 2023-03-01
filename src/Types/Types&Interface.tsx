
export type WindowContextType = {
    width: number;
    height: number;
};

export interface WindowContextProviderProps {
    children: React.ReactNode;
};


export interface AuthContextProps {
    children: React.ReactNode;
};

export type UserType = {
    UserId: number;
    UserName: string;
    UserEmail: string;
    IsLoggedIn: boolean;
};

export type AuthContextType = {
    user: UserType;
    setUser: React.Dispatch<React.SetStateAction<UserType>>;
    Login: (username: string,password:string) => void;
    Logout: () => void;
    Register : (username: string, password: string) => void;
};