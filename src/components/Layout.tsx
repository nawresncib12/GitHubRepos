import { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import ModeSwitch from "./ModeSwitch";
import classes from "./Layout.module.css";
interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  const [lightMode, setLightMode] = useState(true);
  const changeMode = () => {
    if (lightMode) {
      document.body.style.backgroundColor = "#1E1E1E";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
    setLightMode(!lightMode);
  };
  return (
    <div className={`${lightMode ? classes.light : classes.dark}`}>
      <Navbar />
      <div className={classes.content}> {props.children}</div>
      <ModeSwitch changeMode={changeMode} lightMode={lightMode} />
    </div>
  );
};

export default Layout;
