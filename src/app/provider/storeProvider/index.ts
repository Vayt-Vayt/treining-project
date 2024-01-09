import { createReduxStore, useAppDispatch } from "./config/store";
import type { StateShema } from "./config/StateShema"
import  { StoreProvider } from "./ui/StoreProvider";


export  { 
    createReduxStore,
    StateShema,
    StoreProvider,
    useAppDispatch
}
