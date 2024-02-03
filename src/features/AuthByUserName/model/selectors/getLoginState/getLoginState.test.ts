import { StateShema } from "app/provider/storeProvider"
import { getLoginState } from "./getLoginState"

describe('getLoginState', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 0 
            },
            user: undefined,
            loginForm: {
                isLoading:false,
                password: 'asdf',
                username: 'asdf',
                error: '',
            }
        }
        expect(getLoginState(state)).toEqual({
            isLoading:false,
            password: 'asdf',
            username: 'asdf',
            error: '',
        })

    })

    test('should two', () => { 
        const state: StateShema = {
            counter: undefined,
            user: undefined
        }
        expect(getLoginState(state)).toEqual(undefined)

    })
})