import { createContext, useContext } from "react";

// context with functions 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

function useTheme(){
    return useContext(ThemeContext)
}
export default useTheme