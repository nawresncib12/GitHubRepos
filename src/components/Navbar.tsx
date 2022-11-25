import classes from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState("initial");
  return (
    <div className={classes.navContainer}>
      {navbar === "open" && <NavbarMenu setNavbar={setNavbar}></NavbarMenu>}
      <div className={classes.navbar}>
        <h1 className={classes.title}>
          <div className={classes.background}></div>
          GitHub Repos</h1>
        <div className={classes.links}>
          <a href="/">Home</a>
          <a href="/">Search</a>
          <a href="/">Documentation</a>
        </div>
        <div className={classes.mobile}>
          <div
            onClick={() => {
              setNavbar("loading");
              setTimeout(() => {
                setNavbar("open");
              }, 400);
            }}
            className={classes.outer}
          >
            <div
              className={`${classes.inner}  ${
                navbar === "loading" || navbar === "open"
                  ? classes["opened"]
                  : navbar === "initial"
                  ? ""
                  : classes["closed"]
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
