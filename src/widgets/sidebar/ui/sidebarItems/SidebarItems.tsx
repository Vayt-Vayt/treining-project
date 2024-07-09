import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { AppLink, ThemeLink } from 'shared/ui/AppLink/AppLink';
import { SidebarItemsType } from 'widgets/sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./SidebarItems.module.scss"
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';


interface SidebarItemsProps {
    items: SidebarItemsType;
    collapsed?: Boolean;
    
}

export const SidebarItems = memo((props: SidebarItemsProps) => {
    const { items, collapsed = false } = props
    const { t } = useTranslation()
    const isAuth = useSelector(getUserAuthData)

    if( items.authOnly && !isAuth) {
        return null
    }

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
