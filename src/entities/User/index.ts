import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";

export { 
    userActions,
    userReducer 
} from "./model/slice/UserSlice";

export type { UserShema, User } from "./model/type/UserShema"


export {
    getUserAuthData
}