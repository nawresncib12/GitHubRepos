import classes from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState("initial");
  const openNavbar = () => {
    setNavbar("loading");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setNavbar("open");
    }, 400);
  };
  return (
    <div
      className={`${classes.navContainer} ${
        navbar === "loading" || navbar === "open" || navbar === "closed"
          ? ""
          : classes.open
      }`}
    >
      {navbar === "open" && <NavbarMenu setNavbar={setNavbar}></NavbarMenu>}
      <div className={classes.navbar}>
        <a href="/">
          <h1 className={classes.title}>
            <div className={classes.background + " lg"}></div>
            GitHub Repos
          </h1>
        </a>
        <div className={classes.links}>
          <a className="underline" href="/">
            Home
          </a>
          <a className="underline" href="/user">
            Search
          </a>
          <a className="underline" href="/">
            Documentation
          </a>
        </div>
        <div className="sm">
          <div onClick={openNavbar} className={classes.outer}>
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
