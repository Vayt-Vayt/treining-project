import { StateShema } from "app/provider/storeProvider"
import { getLoginError } from "./getLoginError"


describe('getLoginError', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 0 
            },
            user: undefined,
            loginForm: {
                isLoading:false,
                password: '',
                username: '',
                error: 'error',
            }
        }
        expect(getLoginError(state)).toEqual('error')

    })

    test('should two', () => { 
        const state: StateShema = {
            counter: undefined,
            user: undefined
        }
        expect(getLoginError(state)).toEqual(undefined)

    })
})
