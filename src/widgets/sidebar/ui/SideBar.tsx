/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./SideBar.module.scss";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<Boolean>(false);

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.SideBar, [className], {
                [cls.collapsed]: collapsed,
            })}
        >
            <Button
                data-testid="sidebar-toggle" 
                theme={ThemeButton.CLEAR} 
                onClick={toggleCollapsed}
            >
                toogle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
