import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
}); 
// default value of context can be pass in the createContext parameters 

export const ThemeProvider = ThemeContext.Provider


// custom hook 
export default function useTheme(){
    return useContext(ThemeContext)
}

// remeber to change the taiwind css config file 