import { useEffect, useState } from "react";
import { ThemeContext } from "./theme.contex";

export function ThemeProvider({children}) {
    const [theme, setThem] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light')
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => setThem(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{
            theme, toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
