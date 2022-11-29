import classes from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState("initial");
  /**
   * shows navbar menu in smaller screens
   */
  const openNavbar = () => {
    //shows animation
    setNavbar("loading");
    //stops scroll
    document.body.style.overflow = "hidden";
    //shows navbar menu after animation is over
    setTimeout(() => {
      setNavbar("open");
    }, 400);
  };
  /**
   * navigates to specified route within the web application
   * @param {string} route
   */
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
          <a
            href="https://github.com/nawresncib12/GitHubRepos"
            className="underline"
          >
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
