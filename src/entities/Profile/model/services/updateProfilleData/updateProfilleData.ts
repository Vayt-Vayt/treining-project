import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "shared/config/i18next/i18next";
import { ThunkConfig } from "app/provider/storeProvider"
import { Profile } from "../../type/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";


export const updateProfilleData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/updateProfilleData",
    async (_, { rejectWithValue, extra, getState }) => {

        const formDate = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>("/profile", formDate)
            return response.data
        } catch (error) {
            return  rejectWithValue(i18n.t("Вы ввели не верный логин или пароль!"))
        }
    }
) 