import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";

import { CounterShema } from "entities/Counter";
import { ProfileShema } from "entities/Profile";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByUserName";



export interface StateShema {
    counter: CounterShema;
    user: UserShema;
    loginForm?: LoginShema;
    profile?: ProfileShema;
}


export type StateShemaKey = keyof StateShema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateShema>;
    reduce: (state: StateShema, action: UnknownAction) => Partial<StateShema>;
    add: (key: StateShemaKey, reducer: Reducer) => void;
    remove: (key: StateShemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateShema;
}