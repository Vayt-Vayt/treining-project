import { StateShema } from "app/provider/storeProvider";

export const getLoginUsername = (state: StateShema) => state?.loginForm?.username || ""
