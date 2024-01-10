import { createSlice } from "@reduxjs/toolkit"
import { UserShema } from "../type/UserShema"


const initialState: UserShema = {
    
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
   
    },
})

export const { actions: userActions } = counterSlice
export const { reducer: userReducer } = counterSlice