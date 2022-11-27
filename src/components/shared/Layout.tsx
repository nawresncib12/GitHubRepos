import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import ModeSwitch from "./ModeSwitch";
import classes from "./Layout.module.css";
import { useMode } from "../../context/ModeContext";
interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  const {mode, setMode} = useMode();
  document.body.style.backgroundColor = mode == "light" ? "#fff" : "#1E1E1E";

  const changeMode = () => {
    if (mode == "light") {
      localStorage.setItem("mode", "dark");

      setMode("dark");
    } else {
      localStorage.setItem("mode", "light");

      setMode("light");
    }
  };
  return (
    <div
      className={`${classes.layout} ${
        mode == "light" ? classes.light : classes.dark
      }`}
    >
      <Navbar />
      <div className={classes.content}> {props.children}</div>
      <ModeSwitch changeMode={changeMode} mode={mode} />
    </div>
  );
};

export default Layout;
