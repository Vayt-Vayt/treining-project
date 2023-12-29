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
  const [collapsed, setCollapsed] = useState<Boolean>(true);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(cls.SideBar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <Button theme={ThemeButton.CLEAR} onClick={toggleCollapsed}>
        toogle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
