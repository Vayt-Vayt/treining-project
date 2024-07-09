import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./Text.module.scss";

export enum ThemeText {
    PRIMARY = "primary",
    ERROR = "error"
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center"
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: ThemeText;
    align?: TextAlign
}

export const Text: FC<TextProps> = memo((props) => {
    const { className, text, title, theme = ThemeText.PRIMARY, align = TextAlign.LEFT} = props;
    return (
        <div className={classNames(cls.Text, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});

Text.displayName = "Text"