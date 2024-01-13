import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_IN = "clear_inverted",
  OUTLINE = "outline",
  BACKGRAUND = "backgraund",
  BACKGRAUND_INVERTED = "backgraund_inverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean
}



const Button: FC<ButtonProps> = (props) => {
    const { 
        className, 
        theme, 
        square, 
        size, 
        children,
        disabled, 
        ...otherProps 
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    const additional = [className, cls[theme], cls[size]]

    return (
        <button
            className={classNames(cls.Button, additional, mods)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
