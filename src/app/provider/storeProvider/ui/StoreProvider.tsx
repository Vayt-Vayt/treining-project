import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateShema } from '../config/StateShema';


interface StoreProvederProps {
    children: React.ReactNode;
    initialState?: StateShema;
}

export const StoreProvider:FC<StoreProvederProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState)
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

