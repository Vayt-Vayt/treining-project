import MainItems from "shared/assets/icons/main-20-20.svg";
import AboutItems from "shared/assets/icons/about-20-20.svg";
import ProfileItems from "shared/assets/icons/profile-20-20.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemsType {
    path: string;
    text: string;
    Icon: string;
}

export const SidebarItemsList: SidebarItemsType[] = [
    {
        path: RoutePath.main,
        Icon: MainItems,
        text: "Главная"
    },
    {
        path: RoutePath.about,
        Icon: AboutItems,
        text: "О сайте"
    },
    {
        path: RoutePath.profile,
        Icon: ProfileItems,
        text: "Страница профиля"
    }
]