import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useTheme } from "./provider/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provider/router";

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div className={classNames('App', [theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={toggleTheme}>toggle theme</button>
     <AppRouter />
    </div>
  );
};

export default App;
