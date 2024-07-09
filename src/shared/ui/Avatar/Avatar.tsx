import React, { CSSProperties, useMemo } from 'react';
import cls from "./Avatar.module.scss"
import { classNames } from 'shared/lib/classNames/classNames';


interface AvatarProps {
    src: string;
    className?: string;
    size?: number;
    alt?: string;
}

const Avatar = (props: AvatarProps) => {
    const { 
        className,
        src,
        size,
        alt
    } = props

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100
    }), [size])

    return (
        <img 
            className={classNames(cls.Avatar, [className])} 
            src={src} 
            style={style}
            alt={alt}
        />
    );
};

export default Avatar;