import { Mods, classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/type/profile';
import { useAppDispatch } from 'app/provider/storeProvider';

import cls from "./ProfileCard.module.scss";
import Loader from 'shared/ui/Loader/Loader';

import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Country, CountrySelect } from 'entities/Country';

interface ProfileCardProps {
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAge?: (value?: string | number) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCountry?: (value?: Country) => void;
    onChangeCurrency?: (value?: Currency) => void;
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean; 

}

export const ProfileCard = (props: ProfileCardProps) => {
    const { 
        className, 
        data, 
        error, 
        isLoading, 
        onChangeFirstname, 
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeCurrency,
        onChangeCountry,
        onChangeUsername,
        onChangeAvatar, 
        readonly
    } = props

    const { t } = useTranslation('profile')
    
    const dispatch = useAppDispatch()

    const mods: Mods = {
        [cls.editing]: !readonly
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, [className, cls.error])}>
                <Text 
                    theme={ThemeText.ERROR} 
                    text={t("Попробуйте обновить страницу")}  
                    title={t("Произошла ошибка загрузки профиля")}
                    align={TextAlign.CENTER} 
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, [className], mods)}>
            <div className={cls.data}>
                {data?.avatar && 
                <div className={cls.avatarWrapper} >
                    <Avatar src={data.avatar} />
                </div>
                }
                <Input
                    value={data?.first}
                    label={t("Ваше имя")}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    autoFocus={true}
                />
                <Input
                    value={data?.lastname}
                    label={t("Ваша фамилия")}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}

                />
                <Input
                    value={data?.username}
                    label={t("Ваша ник")}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={String(data?.age)}
                    label={t("Ваш возраст")}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    type="number"

                />
                <Input
                    value={data?.city}
                    label={t("Ваш город")}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}

                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
                <CurrencySelect 
                    className={cls.input}
                    value={data?.currency} 
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    label={t("Ваш аватар")}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};


