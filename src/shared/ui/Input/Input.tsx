import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "id" | "readOnly">

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void,
    type?: string;
    label?: string;
    id?:  string;
    autoFocus?: boolean;
    readonly?: boolean; 
}

export const Input = memo((props: InputProps) => {
    const { 
        className, 
        type = "text", 
        value, 
        onChange, 
        label, 
        id,
        autoFocus,
        readonly,
        ...otherProps 
    } = props

    const ref = useRef<HTMLInputElement>(null)

    const idProps = id ? id : label ? label : value

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }

    useEffect(() => {
        if(autoFocus) {
            ref.current?.focus()
        }
    }, [autoFocus])

    return ( 
        <div className={classNames(cls.InputWraper, [className], {[cls.readonly]: readonly})}>
            {label && 
                <label htmlFor={idProps} className={cls.placeholder}>
                    {`${label}:`}
                </label>}
            <input
                id={idProps}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                autoFocus={autoFocus}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});

Input.displayName = 'Input';