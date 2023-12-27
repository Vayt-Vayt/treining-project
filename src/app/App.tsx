import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useTheme } from "./provider/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provider/router";

import "./styles/index.scss";
import { NavBar } from "widgets/navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("App", [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );
};

export default App;
