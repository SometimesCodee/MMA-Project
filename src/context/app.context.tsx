import React, { createContext, useContext, useState } from "react";

interface AppContextType{
    theme: string;
    setTheme: (theme: string) => void;
    appState: ILogin | null;
    setAppState: (appState: any) => void
}
const AppContext = createContext<AppContextType | null>(null)

interface IProps{
    children: React.ReactNode
}
export const useCurrentApp = () => {
    const currentTheme = useContext(AppContext);
    if(!currentTheme){
        throw new Error('useCurrentApp must be used within a AppProvider')
    } 
    return currentTheme
}
const AppProvider = (props: IProps) => {
    const [theme, setTheme] = useState<string>('');
    const [appState, setAppState] = useState<ILogin | null>(null);
    return (
        <AppContext.Provider value={{theme, setTheme, appState, setAppState}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;