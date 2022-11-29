import { useNavigate } from "react-router-dom";
import classes from "./NavbarMenu.module.css";
interface NavbarMenuProps {
  setNavbar(type: string): void;
}
const NavbarMenu = ({ setNavbar }: NavbarMenuProps) => {
  const navigate = useNavigate();
  /**
   * hide navbar menu and remake body scrollable
   */
  const close = () => {
    setNavbar("closed");
    document.body.style.overflow = "auto";
  };
  /**
   * hide navbar menu
   * remake body scrollable
   * navigate to specified route within the web application after timeout for animation to run
   * @param {string} route
   */
  const handleNavigate = (route: string) => {
    setNavbar("closed");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      navigate(route);
    }, 700);
  };
  return (
    <div className={classes.navbar}>
      <span className={classes.link + " " + classes.close} onClick={close}>
        x
      </span>
      <span
        className={classes.link + " underline"}
        onClick={() => {
          handleNavigate("/");
        }}
      >
        Home
      </span>
      <span
        className={classes.link + " underline"}
        onClick={() => {
          handleNavigate("/user");
        }}
      >
        Search
      </span>
      <a
        href="https://github.com/nawresncib12/GitHubRepos"
        className={classes.link + " underline"}
      >
        Documentation
      </a>
    </div>
  );
};

export default NavbarMenu;
