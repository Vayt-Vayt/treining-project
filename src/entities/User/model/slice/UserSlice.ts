import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { User, UserShema } from "../type/UserShema"
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage"


const initialState: UserShema = {
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        isAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined
        }
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice