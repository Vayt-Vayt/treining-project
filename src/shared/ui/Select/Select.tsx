import React, { ChangeEvent, memo, useMemo } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './select.module.scss';

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, onChange, value, readonly } = props;
    const mods: Mods = {

    }

    const onChangehandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    return (
        <div className={classNames(cls.Wrapper, [className], mods)}>
            {label && (
                <span className={cls.label}>
                    {label}
                </span>
            )}
            <select 
                disabled={readonly}
                className={cls.select} 
                value={value} 
                onChange={onChangehandler}
            >
                {optionsList}
            </select>
        </div>
    );
});

Select.displayName = "Select"