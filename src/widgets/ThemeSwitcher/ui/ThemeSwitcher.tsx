import React, { FC } from 'react';
import { Theme, useTheme } from 'app/provider/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss'
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme();

    const iconTheme = theme === Theme.DARK ? <DarkIcon /> : <LightIcon />

    return (
        <Button 
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, [className])}
        >
            {iconTheme}
        </Button>
    );
};
