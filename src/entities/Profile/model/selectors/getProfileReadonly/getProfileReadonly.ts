import { StateShema } from "app/provider/storeProvider";

export const getProfileIsReadOnly = (state: StateShema) => state?.profile?.readonly
