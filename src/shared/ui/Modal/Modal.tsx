import React, { FC, useCallback, useEffect, useRef, useState } from 'react';


import cls from "./Modal.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

interface KeyboardEvent  {
    key: string;
  }

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const [isClosing, setIsClosing] = useState(false);

    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback((event: KeyboardEvent) =>  {
        if(event.key === "Escape") {
            closeHandler()
        }
    }, [closeHandler])
  

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing 
    }

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if(lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, [className], mods)}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;