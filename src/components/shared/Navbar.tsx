import classes from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState("initial");
  return (
    <div
      className={`${classes.navContainer} ${
        navbar === "loading" || navbar === "open" || navbar === "closed" ? "" : classes.open
      }`}
    >
      {navbar === "open" && <NavbarMenu setNavbar={setNavbar}></NavbarMenu>}
      <div className={classes.navbar}>
        <h1 className={classes.title}>
          <div className={classes.background + " lg"}></div>
          GitHub Repos
        </h1>
        <div className={classes.links + " lg"}>
          <a href="/">Home</a>
          <a href="/user">Search</a>
          <a href="/">Documentation</a>
        </div>
        <div className="sm">
          <div
            onClick={() => {
              setNavbar("loading");
              document.body.style.overflow = "hidden";
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
