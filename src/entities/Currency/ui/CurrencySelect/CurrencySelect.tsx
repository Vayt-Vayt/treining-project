import { Currency } from 'entities/Currency/model/types/currency';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';



interface CurrensySelectProps  {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void 
    readonly?: boolean;
}

// const options=[
//     {value: Currency.EUR, content: Currency.EUR},
//     {value: Currency.RUB, content: Currency.RUB},
//     {value: Currency.USD, content: Currency.USD}
// ]  


export const CurrencySelect = memo((props: CurrensySelectProps) => {
    const { className, value, onChange, readonly } = props
    const { t } = useTranslation()

    const options = (Object.keys(Currency) as Array<keyof typeof Currency>).map((key) => ({
        value: Currency[key],
        content: Currency[key],
    }));

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
        
    }, [onChange])
    return (
        <Select 
            className={classNames('', [className])}
            label={t("Ваша валюта")}
            options={options}   
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

CurrencySelect.displayName = "CurrencySelect"
