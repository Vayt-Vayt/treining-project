import React, { FC } from "react";

import cls from "./About.module.scss";
import { useTranslation } from "react-i18next";
import { Counter } from "entities/Counter";

const About: FC = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.About}>
            <h2>{t("О сайте")}</h2>
            <Counter />
        </div>
    );
};

export default About;
