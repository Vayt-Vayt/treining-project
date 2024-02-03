import { StateShema } from "app/provider/storeProvider";

export const getLoginPassword = (state: StateShema) => state?.loginForm?.password || ""
