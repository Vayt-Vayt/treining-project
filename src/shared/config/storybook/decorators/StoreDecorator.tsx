import { StateShema, StoreProvider } from "app/provider/storeProvider"
import { FC } from "react"

const initialState: StateShema = {
    counter: {
        value: 10
    },
    loginForm: {
        isLoading: false,
        password:"",
        username:"",
        error: undefined
    },
    user: {
        authData:undefined
    }
}

export const StoreDecorators =  (StoryComponent: FC, initState?: StateShema) => {
    return(
        <StoreProvider initialState={initState || initialState} >
            <StoryComponent />
        </StoreProvider>
    )
}