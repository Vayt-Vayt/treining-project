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