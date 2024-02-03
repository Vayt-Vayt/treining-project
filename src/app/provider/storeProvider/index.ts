import { createReduxStore, useAppDispatch } from "./config/store";
import type { StateShema, ReduxStoreWithManager } from "./config/StateShema"
import  { StoreProvider } from "./ui/StoreProvider";


export  { 
    createReduxStore,
    StateShema,
    StoreProvider,
    useAppDispatch,
    ReduxStoreWithManager
}
