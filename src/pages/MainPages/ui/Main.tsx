import React, { FC } from "react";

import cls from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import { BagButton } from "app/provider/errorBondary";

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.Main}>
            <BagButton />
            <h2>{t("Главная")}</h2>
        </div>
    );
};

export default Main;
