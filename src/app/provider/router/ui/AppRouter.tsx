import { getUserAuthData } from "entities/User";
import React, { memo, Suspense, useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/PageLoader";

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter( route => {
            if(route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default memo(AppRouter);
