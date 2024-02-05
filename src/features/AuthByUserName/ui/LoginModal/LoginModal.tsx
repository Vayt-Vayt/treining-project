import React, { FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';

import cls from "./LoginModal.module.scss"
import { LoginFormlAsync } from '../LoginForm/LoginFormAsync';
import Loader from 'shared/ui/Loader/Loader';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose, lazy } = props
    const isAuth = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    
    useEffect(() => {
        if(isAuth) {
            onClose()
        }
    }, [isAuth, onClose])

    return (
        <Modal 
            className={classNames(cls.LoginModal, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={lazy}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormlAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};
