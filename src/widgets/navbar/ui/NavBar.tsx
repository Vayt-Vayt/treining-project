import React, { useState, type FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUserName";

import cls from "./NavBat.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState<boolean>(false)
   
    const onToggle = useCallback(() => {
        setIsOpen(val => !val)
    }, [setIsOpen])


    return (
        <div className={classNames(cls.NavBar, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR_IN} onClick={onToggle}>{t("Войти")}</Button>
            </div>
            <LoginModal 
                isOpen={isOpen}
                onClose={onToggle}
                lazy 
            />
        </div>
    );
};
