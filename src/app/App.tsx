import { useTheme } from "./provider/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provider/router";

import "./styles/index.scss";
import { NavBar } from "widgets/navbar";
import { SideBar } from "widgets/sidebar";
import { Suspense } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", [theme])}>
      <Suspense fallback=''>
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
