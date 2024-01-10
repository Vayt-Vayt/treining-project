import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';

import cls from "./LoginModal.module.scss"
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose, lazy } = props
    
    
    return (
        <Modal 
            className={classNames(cls.LoginModal, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={lazy}
        >
            <LoginForm />
        </Modal>
    );
};
