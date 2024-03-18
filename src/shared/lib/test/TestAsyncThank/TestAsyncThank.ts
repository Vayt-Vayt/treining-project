import { AsyncThunkAction } from "@reduxjs/toolkit";
import { StateShema } from "app/provider/storeProvider"
import axios from "axios";


type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock("axios")

const mockedAxios = jest.mocked(axios)

export const TestAsyncThunk = <Return, Arg, RejectedValue>(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) => {
    const dispatch: jest.MockedFn<any> = jest.fn();
    const getState: () => StateShema = jest.fn();
    const navigate: jest.MockedFn<any> = jest.fn();
    const api = mockedAxios;
    const callThunk = async (arg: Arg) => {
        const action = actionCreator(arg);
        const result = await action(dispatch, getState, {api, navigate});
        return result;
    };

    return {
        dispatch,
        getState,
        actionCreator,
        callThunk,
        api,
        navigate
    };
};