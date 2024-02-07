import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateShema } from '../config/StateShema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';


interface StoreProvederProps {
    children: React.ReactNode;
    initialState?: StateShema;
    asyncReducers?: Partial<ReducersMapObject<StateShema>>
}

export const StoreProvider:FC<StoreProvederProps> = ({ children, initialState, asyncReducers }) => {
    const navigate = useNavigate()
    const store = createReduxStore(initialState, asyncReducers, navigate)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

