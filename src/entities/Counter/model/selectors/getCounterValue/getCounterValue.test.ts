import { StateShema } from "app/provider/storeProvider"
import { getCounterValue } from "./getCounterValue"

describe('getCounter', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 10
            },
            user: undefined,
            loginForm: undefined
        }
        expect(getCounterValue(state)).toEqual(10)

    })
})
