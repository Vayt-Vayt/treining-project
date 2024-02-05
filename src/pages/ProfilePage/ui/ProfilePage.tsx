import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./ProfilePage.module.scss"
import { useTranslation } from 'react-i18next';
import { DynamikModuleLoaader, ReducerList } from 'shared/lib/components/DynamikModuleLoaader/DynamikModuleLoaader';
import { profileReducer } from 'entities/Profile';


const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamikModuleLoaader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, [className])}>
                {t("Страница профиля")}
            </div>
        </DynamikModuleLoaader>
    );
};

export default ProfilePage;