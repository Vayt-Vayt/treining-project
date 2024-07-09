import { About } from "pages/AboutPages";
import { Main } from "pages/MainPages";
import { NotFoundPage } from "pages/NotFoundPages";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";


type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "nod_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <About />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.nod_found,
        element: <NotFoundPage />
    }
};
