import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

interface IThemeProviderProps {
    theme: Theme;
    children: ReactElement;
}

const themeContext = createContext<Theme>('light');

export function ThemeProvider({ theme, children }: IThemeProviderProps) {
    return (
        <themeContext.Provider value={theme}>{children}</themeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(themeContext);
}
