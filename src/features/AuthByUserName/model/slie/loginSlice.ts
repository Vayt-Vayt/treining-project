import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { LoginShema } from "../types/LoginShema"
import { loginByUsername } from "../services/loginByUsername/loginByUsername"


const initialState: LoginShema = {
    isLoading: false,
    password: "",
    username:"",
    error: undefined
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },

        setPasword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },

        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },

        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
               
                
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
      
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice