import { CounterShema } from "../type/CounterShema"
import { counterActions, counterReducer } from "./CounterSlice"

describe('getCounter', () => {
    test('should first', () => { 
        const state: CounterShema = {
            value: 10
        }
        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({ value: 9})
    })

    test('should two', () => { 
        const state: CounterShema = {
            value: 10
        }
        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({ value: 11})
    })

    test('should three', () => { 
        expect(
            counterReducer(undefined, counterActions.increment())
        ).toEqual({ value: 1})
    })

})
