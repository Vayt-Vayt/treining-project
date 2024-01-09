import { createSelector } from "@reduxjs/toolkit";
import { StateShema } from "app/provider/storeProvider";
import { getCounter } from "../getCounter/getCounter";


export const getCounterValue = createSelector(
    getCounter,
    (getCounter) => getCounter.value
)