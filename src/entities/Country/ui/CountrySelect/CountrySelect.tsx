import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { Country } from 'entities/Country/model/types/country';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';



interface CountrySelectProps  {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void 
    readonly?: boolean;
}


export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    const options = (Object.keys(Country) as Array<keyof typeof Country>).map((key) => ({
        value: Country[key],
        content: Country[key],
    }));

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
        
    }, [onChange])
    return (
        <Select 
            className={classNames('', [className])}
            label={t("Ваша страна")}
            options={options}   
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

CountrySelect.displayName = "CountrySelect"
