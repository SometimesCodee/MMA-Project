import React, { createContext, useContext, useState } from "react";

interface AppContextType{
    theme: string;
    setTheme: (theme: string) => void;
    appState: IUserLogin | null;
    setAppState: (appState: any) => void;
    cart: ICart | Record<string, never>;
    setCart: (v: any) => void
    restaurant: IRestaurant | null
    setRestaurant: (v: any) => void
}
const AppContext = createContext<AppContextType | null>(null)

interface IProps{
    children: React.ReactNode
}
const AppProvider = (props: IProps) => {
    const [theme, setTheme] = useState<string>('');
    const [appState, setAppState] = useState<IUserLogin | null>(null);
    const [cart, setCart] = useState<ICart | Record<string, never>>({});
    const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
    return (
        <AppContext.Provider value={{
            theme, setTheme, 
            appState, setAppState,
            cart, setCart,
            restaurant, setRestaurant
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useCurrentApp = () => {
    const currentTheme = useContext(AppContext);
    if(!currentTheme){
        throw new Error('useCurrentApp must be used within a AppProvider')
    } 
    return currentTheme
}

export default AppProvider;