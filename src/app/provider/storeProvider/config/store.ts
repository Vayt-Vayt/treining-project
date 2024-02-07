import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateShema } from './StateShema';
import { useDispatch } from 'react-redux';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';


export function createReduxStore(
    initialState?: StateShema,
    asyncReducers?: Partial<ReducersMapObject<StateShema>>,
    navigate?: (to: To, options?: NavigateOptions) => void,
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
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
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

