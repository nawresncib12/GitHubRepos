import { useNavigate } from "react-router-dom";
import classes from "./NavbarMenu.module.css";
interface NavbarMenuProps {
  setNavbar(type: string): void;
}
const NavbarMenu = ({ setNavbar }: NavbarMenuProps) => {
  const navigate = useNavigate();
  const close = () => {
    setNavbar("closed");
    document.body.style.overflow = "auto";
  };
  const handleNavigate = (route: string) => {
    setNavbar("closed");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      navigate(route);
    }, 700);
  };
  return (
    <div className={classes.navbar}>
      <span className={classes.close} onClick={close}>
        x
      </span>
      <span className="underline"
        onClick={() => {
          handleNavigate("/");
        }}
      >
        Home
      </span>
      <span  className="underline"
        onClick={() => {
          handleNavigate("/user");
        }}
      >
        Search
      </span>
      <span  className="underline">Documentation</span>
    </div>
  );
};

export default NavbarMenu;
