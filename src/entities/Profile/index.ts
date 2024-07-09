
import {
    ProfileShema,
    Profile
} from "./model/type/profile";

export type {  
    ProfileShema,
    Profile
}

export {
    profileActions,
    profileReducer
} from "./model/slice/ProfileSlice"

export {
    fetchProfileData
} from "./model/services/fetchProfileData/fetchProfileData"

export {
    ProfileCard
} from "./ui/ProfileCard/ProfileCard"

export { getProfileData } from "./model/selectors/getProfileData/getProfileData"
export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading"
export { getProfileError } from "./model/selectors/getProfileError/getProfileError"
export { getProfileIsReadOnly } from "./model/selectors/getProfileReadonly/getProfileReadonly"
export { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm"
export { updateProfilleData } from "./model/services/updateProfilleData/updateProfilleData";