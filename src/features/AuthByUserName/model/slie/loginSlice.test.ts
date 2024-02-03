import { LoginShema } from "../types/LoginShema"
import { loginActions, loginReducer } from "./loginSlice"

describe('loginSlice', () => {
    test('should first', () => { 
        const state: Partial<LoginShema> = {
            username: "123",
        }
        expect(
            loginReducer(state as LoginShema, loginActions.setUsername("123"))
        ).toEqual({ username: "123" })
    })

    test('should two', () => { 
        const state: Partial<LoginShema> = {
            password: "123",
        }
        expect(
            loginReducer(state as LoginShema, loginActions.setPasword("123"))
        ).toEqual({ password: "123" })
    })

})
