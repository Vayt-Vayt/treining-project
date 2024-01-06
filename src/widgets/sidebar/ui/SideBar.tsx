/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import Button, { SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { AppLink, ThemeLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainItems from "shared/assets/icons/main-20-20.svg";
import AboutItems from "shared/assets/icons/about-20-20.svg";

import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<Boolean>(false);
    const { t } = useTranslation(); 

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, [className], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button
                className={cls.collapsedBtn}
                data-testid="sidebar-toggle" 
                theme={ThemeButton.BACKGRAUND_INVERTED} 
                onClick={toggleCollapsed}
                square
                size={SizeButton.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                <AppLink
                    className={cls.link}
                    to={RoutePath.main}
                    theme={ThemeLink.IN_SECONDARY}
                >
                    <MainItems /> 
                    <span className={cls.linkText}>
                        {t("Главная") }
                    </span>
                </AppLink>
                <AppLink 
                    className={cls.link}
                    to={RoutePath.about} 
                    theme={ThemeLink.IN_SECONDARY}>
                    <AboutItems /> 
                    <span className={cls.linkText}>
                        {t("О сайте")}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
