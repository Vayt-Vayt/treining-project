import React, { FC } from "react";

import cls from "./Main.module.scss";
import { useTranslation } from "react-i18next";

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.Main}>
            <h2>{t("Главная")}</h2>
        </div>
    );
};

export default Main;
