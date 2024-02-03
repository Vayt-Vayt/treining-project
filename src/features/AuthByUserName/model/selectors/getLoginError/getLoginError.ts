import { StateShema } from "app/provider/storeProvider";

export const getLoginError = (state: StateShema) => state?.loginForm?.error || undefined
