import React, { FC } from "react";
import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import cls from "./NavBat.module.scss";
import { AppLink, ThemeLink } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.NavBar, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to={"/"} theme={ThemeLink.IN_SECONDARY}>
          Main
        </AppLink>
        <AppLink to={"/about"} theme={ThemeLink.IN_SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
