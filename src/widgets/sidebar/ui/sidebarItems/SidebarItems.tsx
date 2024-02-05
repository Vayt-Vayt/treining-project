import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { AppLink, ThemeLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemsType } from 'widgets/sidebar/model/items';

import cls from "./SidebarItems.module.scss"
import { classNames } from 'shared/lib/classNames/classNames';


interface SidebarItemsProps {
    items?: SidebarItemsType;
    collapsed?: Boolean;
}

export const SidebarItems = memo((props: SidebarItemsProps) => {
    const { items, collapsed } = props
    const { t } = useTranslation()


    return (
        <AppLink
            className={classNames(cls.link, [], {[cls.collapsed]: collapsed})}
            to={items.path}
            theme={ThemeLink.IN_SECONDARY}
        >
            <items.Icon/> 
            <span className={cls.linkText}>
                {t(items.text) }
            </span>
        </AppLink> 
    );
});

SidebarItems.displayName = "SidebarItems"

// 20:13