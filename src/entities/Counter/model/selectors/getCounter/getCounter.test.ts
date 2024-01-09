import { StateShema } from "app/provider/storeProvider"
import { getCounter } from "./getCounter"

describe('getCounter', () => {
    test('should first', () => { 
        const state: StateShema = {
            counter: {
                value: 10
            }
        }
        expect(getCounter(state)).toEqual({ value: 10})

    })
})

