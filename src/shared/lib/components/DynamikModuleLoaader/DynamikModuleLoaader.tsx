import React, { FC, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';

import { ReduxStoreWithManager, useAppDispatch } from 'app/provider/storeProvider';
import { StateShemaKey } from 'app/provider/storeProvider/config/StateShema';

export type ReducerList = {
    [name in StateShemaKey]?: Reducer;
}



interface DynamikModuleLoaaderProps {
    children: React.ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamikModuleLoaader: FC<DynamikModuleLoaaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateShemaKey, reducer);
        })

        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateShemaKey)
                })
            }
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {children}   
        </>
    );
};
