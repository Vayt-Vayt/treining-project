import React, { FC, useCallback } from 'react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from "./ProfilePageHeader.module.scss"
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileIsReadOnly, profileActions, updateProfilleData } from 'entities/Profile';
import { useAppDispatch } from 'app/provider/storeProvider';

interface ProfilePageHeaderProps {
    className?: string;
}


const ProfilePageHeader: FC = (props: ProfilePageHeaderProps) => {
    const { className } = props

    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileIsReadOnly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch((updateProfilleData()))
        dispatch(profileActions.setReadonly(true))
    }, [dispatch])


    return (
        <div className={classNames(cls.ProfilePageHeader, [className])}>
            <Text title={t("Профиль")} />
            { readonly ? 
                (<Button 
                    theme={ThemeButton.OUTLINE} 
                    className={cls.editBtn}
                    onClick={onEdit}
                > 
                    {t("Редактировать")}
                </Button>
                ) : (
                    <>
                        <Button 
                            theme={ThemeButton.OUTLINE_RED} 
                            className={cls.editBtn}
                            onClick={onCancelEdit}
                        > 
                            {t("Отменить")}
                        </Button>
                        <Button 
                            theme={ThemeButton.OUTLINE} 
                            onClick={onSave}
                        > 
                            {t("Сохранить")}
                        </Button>
                    </>
                )
            }
        </div>
    );
};

export default ProfilePageHeader;