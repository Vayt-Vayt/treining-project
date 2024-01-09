import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateShema } from './StateShema';
import { counterReducer } from 'entities/Counter/model/slice/CounterSlice';
import { useDispatch } from 'react-redux';


export function createReduxStore(
    initialState?: StateShema,
) {
    const rootReducer: ReducersMapObject<StateShema> = {
        counter: counterReducer
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

