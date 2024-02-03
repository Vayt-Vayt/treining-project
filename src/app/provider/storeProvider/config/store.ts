import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateShema } from './StateShema';
import { useDispatch } from 'react-redux';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';


export function createReduxStore(
    initialState?: StateShema,
) {
    const rootReducer: ReducersMapObject<StateShema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__,
    });
    //    @ts-ignore
    store.reducerManager = reducerManager

    return store;
}

const dispatch = createReduxStore().dispatch
const getState = createReduxStore().getState

export type RootState = ReturnType<typeof getState>
export type AppDispatch = typeof dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

