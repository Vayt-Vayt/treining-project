import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from "./ProfilePage.module.scss"
import { DynamikModuleLoaader, ReducerList } from 'shared/lib/components/DynamikModuleLoaader/DynamikModuleLoaader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'app/provider/storeProvider';


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

    return (
        <DynamikModuleLoaader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, [className])}>
                <ProfileCard />
            </div>
        </DynamikModuleLoaader>
    );
};

export default ProfilePage;