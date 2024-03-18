import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/i18next/i18next";
import { ThunkConfig } from "app/provider/storeProvider"
import { Profile } from "../../type/profile";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (_, { rejectWithValue, extra }) => {

        try {
            const response = await extra.api.get<Profile>("/profile")
            return response.data
        } catch (error) {
            return  rejectWithValue(i18n.t("Вы ввели не верный логин или пароль!"))
        }
    }
) 