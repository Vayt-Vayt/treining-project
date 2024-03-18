import { StateShema } from "app/provider/storeProvider";


export const getProfileDataFirst = (state: StateShema) => state?.profile?.data?.first || ""