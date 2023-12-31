import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from "./ErrorPage.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ErrorPageProps {
    className?: string;
}

export const ErorrPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => location.reload()

    return (
        <div className={classNames(cls.ErrorPage, [className])}>
            <p>{t("Произошла не предвиденная ошибка")}</p>
            <Button 
                theme={ThemeButton.CLEAR}
                onClick={reloadPage} 
            >
                {t("Обновить страницу")}
            </Button>
        </div>
    );
};
