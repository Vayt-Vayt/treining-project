import { useTheme } from "./provider/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/navbar";
import { SideBar } from "widgets/sidebar";
import { Suspense, useEffect, useState } from "react";

import "./styles/index.scss";
import { PageLoader } from "widgets/PageLoader/PageLoader";
import { useAppDispatch } from "./provider/storeProvider";
import { userActions } from "entities/User";


const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.isAuthData())
    }, [dispatch])

    return (
        <div className={classNames("App", [theme])}>
            <Suspense fallback={<PageLoader />}>
                <NavBar />
                <div className="contant-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
