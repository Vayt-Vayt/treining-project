import React, { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./AppLink.module.scss";

export enum ThemeLink {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  IN_SECONDARY = "in_secondary",
  IN_PRIMARY = "in_primary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ThemeLink;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    theme = ThemeLink.PRIMARY,
    className,
    to,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
