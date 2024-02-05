import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProfileShema } from "../type/profile"


const initialState: ProfileShema = {
    isLoading: false,
    readonly: true,
    data: undefined,
    error: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice