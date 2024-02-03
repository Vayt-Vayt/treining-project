import { StateShema } from "app/provider/storeProvider"
import { getLoginIsLoading } from "./getLoginIsLoading"

describe('getisLoading', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 0 
            },
            user: undefined,
            loginForm: {
                isLoading:true,
                password: '',
                username: '',
                error: 'error',
            }
        }
        expect(getLoginIsLoading(state)).toEqual(true)

    })

    test('should two', () => { 
        const state: StateShema = {
            counter: undefined,
            user: undefined
        }
        expect(getLoginIsLoading(state)).toEqual(false)

    })
})