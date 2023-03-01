
import React, { useContext, createContext, useEffect, useState } from 'react';

import { WindowContextProviderProps, WindowContextType } from '@/Types/Types&Interface';

const WindowContext = createContext<WindowContextType>({ width: 0, height: 0 });

export const useWindowContext: () => WindowContextType = () => useContext(WindowContext);

const WindowContextProvider : React.FC<WindowContextProviderProps> = ({ children } : React.PropsWithChildren) => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    const handleResize : () => void = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        handleResize();
        window?.addEventListener('resize', handleResize);
        return () => window?.removeEventListener('resize', handleResize);
    }, []);

    return (
        <WindowContext.Provider value={{ width, height }}>
            {children}
        </WindowContext.Provider>
    );
};

export default WindowContextProvider;