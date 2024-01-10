import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';


import cls from "./LoginForm.module.scss";
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, [className])}>
            <Input 
                autoFocus
                label={t("Введите логин")} 
                className={cls.input} 
                type="text" 
            />
            <Input 
                label={t("Введите пароль")} 
                className={cls.input} 
                type="password" 
            />
            <Button 
                className={cls.loginBtn} 
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
