import React, { type FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, ThemeLink } from "shared/ui/AppLink/AppLink";

import cls from "./NavBat.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NavBar, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          to={"/"}
          theme={ThemeLink.IN_SECONDARY}
        >
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} theme={ThemeLink.IN_SECONDARY}>
          {t("О сайте")}
        </AppLink>
      </div>
    </div>
  );
};
