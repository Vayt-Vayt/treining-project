import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./ProfileCard.module.scss";
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { useAppDispatch } from 'app/provider/storeProvider';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;

}

export const ProfileCard: FC = (props: ProfileCardProps) => {
    const { className = "" } = props

    const { t } = useTranslation('profile')

    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const dispatch = useAppDispatch()

    return (
        <div className={classNames(cls.ProfileCard, [className])}>
            <div className={cls.header}>
                <Text title={t("Профиль")} />
                <Button 
                    theme={ThemeButton.OUTLINE} 
                    className={cls.editBtn}
                > 
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваша фамилия")}
                    className={cls.input}
                />
            </div>
        </div>
    );
};


