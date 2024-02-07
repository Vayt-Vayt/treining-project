import { createReduxStore, useAppDispatch } from "./config/store";
import type { StateShema, ReduxStoreWithManager, ThunkConfig } from "./config/StateShema"
import  { StoreProvider } from "./ui/StoreProvider";


export  { 
    createReduxStore,
    StateShema,
    ThunkConfig,
    StoreProvider,
    useAppDispatch,
    ReduxStoreWithManager
}
