import { StateShema } from "app/provider/storeProvider"
import { getLoginUsername } from "./getLoginUsername"

describe('getLoginusername', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 0 
            },
            user: undefined,
            loginForm: {
                isLoading:false,
                password: '',
                username: 'asdf',
                error: '',
            }
        }
        expect(getLoginUsername(state)).toEqual("asdf")

    })

    test('should two', () => { 
        const state: StateShema = {
            counter: undefined,
            user: undefined
        }
        expect(getLoginUsername(state)).toEqual("")

    })
})