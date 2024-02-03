import { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from "@reduxjs/toolkit";
import { CounterShema } from "entities/Counter";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByUserName";



export interface StateShema {
    counter: CounterShema;
    user: UserShema;
    loginForm?: LoginShema;
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