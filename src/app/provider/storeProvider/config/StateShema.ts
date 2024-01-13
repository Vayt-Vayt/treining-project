import { CounterShema } from "entities/Counter";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByUserName";



export interface StateShema {
    counter: CounterShema;
    user: UserShema;
    loginForm: LoginShema;
}