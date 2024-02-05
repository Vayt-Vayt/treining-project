import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

import Button, { ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: Boolean;
}
export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
    const { t, i18n } = useTranslation();
    const { className, short } = props;
    const toggleLang = async () =>
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

    return (
        <Button
            onClick={toggleLang}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, [className])}
        >
            {t(short ? "RU" : "перевод языка")}
        </Button>
    );
});

LangSwitcher.displayName = "LangSwitcher"
