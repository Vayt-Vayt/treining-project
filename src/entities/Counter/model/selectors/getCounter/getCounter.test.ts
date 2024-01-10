import { StateShema } from "app/provider/storeProvider"
import { getCounter } from "./getCounter"

describe('getCounter', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 10
            },
            user: undefined
        }
        expect(getCounter(state)).toEqual({ value: 10})

    })
})

