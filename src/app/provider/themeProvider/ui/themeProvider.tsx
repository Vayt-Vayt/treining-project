import React, { FC, useMemo, useState } from "react";

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "../lib/themeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaulProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaulProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
