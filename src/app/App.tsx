import { useTheme } from "./provider/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provider/router";

import "./styles/index.scss";
import { NavBar } from "widgets/navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("App", [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
