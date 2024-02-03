import { StateShema } from "app/provider/storeProvider"
import { getLoginPassword } from "./getLoginPassword"

describe('getLoginPassword', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 0 
            },
            user: undefined,
            loginForm: {
                isLoading:false,
                password: 'asdf',
                username: '',
                error: '',
            }
        }
        expect(getLoginPassword(state)).toEqual("asdf")

    })

    test('should two', () => { 
        const state: StateShema = {
            counter: undefined,
            user: undefined
        }
        expect(getLoginPassword(state)).toEqual("")

    })
})