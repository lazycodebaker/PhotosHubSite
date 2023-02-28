
export type WindowContextType = {
    width: number;
    height: number;
    window : Window;
};

export interface WindowContextProviderProps {
    children: React.ReactNode;
};