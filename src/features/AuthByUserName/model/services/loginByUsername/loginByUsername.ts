import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "../../../../../entities/User";
import i18n from "shared/config/i18next/i18next";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { ThunkConfig } from "app/provider/storeProvider"

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    "login/loginByUsername",
    async ({password, username}, { dispatch, rejectWithValue, extra }) => {

        try {
            const response = await extra.api.post("/login", {
                password, username
            })

            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (error) {
            return  rejectWithValue(i18n.t("Вы ввели не верный логин или пароль!"))
        }
    }
) 