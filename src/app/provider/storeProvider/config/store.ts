import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateShema } from './StateShema';
import { useDispatch } from 'react-redux';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName';
import { counterReducer } from 'entities/Counter';


export function createReduxStore(
    initialState?: StateShema,
) {
    const rootReducer: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };


    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    });

    return store;
}

const dispatch = createReduxStore().dispatch
const getState = createReduxStore().getState

export type RootState = ReturnType<typeof getState>
export type AppDispatch = typeof dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

