import React, { memo, useCallback } from 'react';

import { useAppDispatch } from 'app/provider/storeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { loginActions } from 'features/AuthByUserName/model/slie/loginSlice';
import { useSelector } from 'react-redux';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';

import cls from "./LoginForm.module.scss";


interface LoginFormProps {
    className?: string;
}

export const LoginForm  = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPasword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({password, username}))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, [className])}>
            <Text title={t("Форма авторизации")}/>
            {error && <Text title={error} theme={ThemeText.ERROR} />}
            <Input 
                autoFocus
                label={t("Введите логин")} 
                className={cls.input} 
                type="text" 
                onChange={onChangeUsername}
                value={username}
            />
            <Input 
                label={t("Введите пароль")} 
                className={cls.input} 
                type="password" 
                onChange={onChangePassword}
                value={password}
            />
            <Button 
                disabled={isLoading}
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn} 
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';
