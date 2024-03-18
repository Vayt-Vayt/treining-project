import { loginByUsername } from "./loginByUsername"
import { userActions } from "../../../../../entities/User"
import { TestAsyncThunk } from "shared/lib/test/TestAsyncThank/TestAsyncThank"
// import { StateShema } from "app/provider/storeProvider"
// import { Dispatch } from "@reduxjs/toolkit"


describe('loginByUsername', () => {
    // let dispatch: Dispatch
    // let getState: () => StateShema

    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })

    // test('should first', async () => { 
    //     const userValue = {username: "users", id: "1"}
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue}))
    //     const action = loginByUsername({password: "users", username: "users"})
    //     const result = await action(dispatch, getState, undefined)

    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe("fulfilled")
    //     expect(result.payload).toEqual(userValue)
    //     // expect().toEqual() 12:53

    // })

    // test('should two', async () => { 
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403}))
    //     const action = loginByUsername({password: "users", username: "users"})
    //     const result = await action(dispatch, getState, undefined)

    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe("rejected")
    //     expect(result.payload).toEqual("Вы ввели не верный логин или пароль!")

    // })

   

    test('should first', async () => { 
        const userValue = {username: "users", id: "1"}
        
        const thunk = TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue}))

        const result = await thunk.callThunk({password: "users", username: "users"})

        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe("fulfilled")
        expect(result.payload).toEqual(userValue)

    })

    test('should two', async () => { 
        
        const thunk = TestAsyncThunk(loginByUsername)
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403}))

        const result = await thunk.callThunk({password: "users", username: "users"})

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe("rejected")
        expect(result.payload).toEqual("Вы ввели не верный логин или пароль!")

    })

    
})