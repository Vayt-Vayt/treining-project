import { FC, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./ProfilePage.module.scss";
import { DynamikModuleLoaader, ReducerList } from 'shared/lib/components/DynamikModuleLoaader/DynamikModuleLoaader';
import { 
    ProfileCard,
    fetchProfileData, 
    getProfileData, 
    getProfileError, 
    getProfileForm, 
    getProfileIsLoading, 
    getProfileIsReadOnly, 
    profileActions, 
    profileReducer 
} from 'entities/Profile';
import { useAppDispatch } from 'app/provider/storeProvider';
import { useSelector } from 'react-redux';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';



const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileIsReadOnly)

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.udateProfile({lastname: value}))
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.udateProfile({first: value}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string | number) => {
        dispatch(profileActions.udateProfile({age: String(value)}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.udateProfile({city: value}))
    }, [dispatch])

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.udateProfile({country: value}))
    }, [dispatch])

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.udateProfile({currency: value}))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.udateProfile({username: value}))
    }, [dispatch])
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.udateProfile({avatar: value}))
    }, [dispatch])

    return (
        <DynamikModuleLoaader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, [className])}>
                <ProfilePageHeader />
                <ProfileCard 
                    error={error}
                    data={formData}
                    isLoading={isLoading}
                    onChangeLastname={onChangeLastname}
                    onChangeFirstname={onChangeFirstname}
                    readonly={readonly}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeCountry={onChangeCountry}
                    onChangeCurrency={onChangeCurrency}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>
        </DynamikModuleLoaader>
    );
};

export default ProfilePage;