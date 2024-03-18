/* eslint-disable i18next/no-literal-string */
import React, { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import Button, { SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { SidebarItemsList } from "../model/items";
import { SidebarItems } from "./sidebarItems/SidebarItems";

import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState<Boolean>(false);

    const toggleCollapsed = () => setCollapsed((prev) => !prev);
    const itemsList = SidebarItemsList.map((item) => 
        <SidebarItems 
            items={item}
            collapsed={collapsed}
            key={item.path}
        />
    )
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
                <div className={cls.itemsLink}>{itemsList}</div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
