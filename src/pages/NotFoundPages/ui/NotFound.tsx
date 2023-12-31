import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./NotFound.module.scss";
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFound, [className])}>
            {t("Страница не найдена!")}
        </div>
    );
};

export default NotFound;