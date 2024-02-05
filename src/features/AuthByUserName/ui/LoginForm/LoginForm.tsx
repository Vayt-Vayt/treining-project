import React, { memo, useCallback } from 'react';

import { useAppDispatch } from 'app/provider/storeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slie/loginSlice';
import { useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Input } from 'shared/ui/Input/Input';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { DynamikModuleLoaader, ReducerList } from 'shared/lib/components/DynamikModuleLoaader/DynamikModuleLoaader';

import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducer: ReducerList = {
    loginForm: loginReducer
}

const LoginForm  = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPasword(value))
    }, [dispatch])

    const onLoginClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({password, username}))
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess()
        }
    }, [dispatch, onSuccess, password, username])

    return (
        <DynamikModuleLoaader 
            reducers={initialReducer} 
            removeAfterUnmount
        >
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
        </DynamikModuleLoaader>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm
