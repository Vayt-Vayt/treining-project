import { StateShema } from "app/provider/storeProvider";

export const getLoginIsLoading = (state: StateShema) => state?.loginForm?.isLoading || false
