import React, { useState, type FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ThemeLink } from "shared/ui/AppLink/AppLink";

import cls from "./NavBat.module.scss";
import Modal from "shared/ui/Modal/Modal";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
   
    const onToggle = useCallback(() => {
        setIsOpen(val => !val)
    }, [setIsOpen])


    return (
        <div className={classNames(cls.NavBar, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR_IN} onClick={onToggle}>{t("Войти")}</Button>
            </div>
            <Modal 
                isOpen={isOpen}
                onClose={onToggle} 
            // eslint-disable-next-line i18next/no-literal-string
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam voluptatum alias 
                tempora. Provident iure a illum accusamus autem numquam.
            </Modal>
        </div>
    );
};
