import classes from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState("initial");
  const openNavbar = () => {
    setNavbar("loading");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setNavbar("open");
    }, 400);
  };
  const handleNavigate = (route: string) => {
    navigate(route);
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
          <span
            onClick={() => {
              handleNavigate("/");
            }}
            className="underline"
          >
            Home
          </span>
          <span
            onClick={() => {
              handleNavigate("/user");
            }}
            className="underline"
          >
            Search
          </span>
          <span
            onClick={() => {
              handleNavigate("/");
            }}
            className="underline"
          >
            Documentation
          </span>
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
