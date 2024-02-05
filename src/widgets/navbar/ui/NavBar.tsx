import React, { useState, type FC, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUserName";

import cls from "./NavBat.module.scss";
import { useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { useAppDispatch } from "app/provider/storeProvider";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const authData = useSelector(getUserAuthData) 
    const dispatch = useAppDispatch()

    const onToggle = useCallback(() => {
        setIsOpen(val => !val)
    }, [setIsOpen])

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.NavBar, [className])}>
                <div className={cls.links}>
                    <Button theme={ThemeButton.CLEAR_IN} onClick={onLogOut}>{t("Выйти")}</Button>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(cls.NavBar, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR_IN} onClick={onToggle}>{t("Войти")}</Button>
            </div>
            {isOpen && <LoginModal 
                isOpen={isOpen}
                onClose={onToggle}
                lazy 
            />}
        </div>
    );
});

NavBar.displayName = "NavBar"