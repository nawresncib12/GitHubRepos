import classes from "./NavbarMenu.module.css";
interface NavbarMenuProps {
  setNavbar(type: string): void;
}
const NavbarMenu = ({ setNavbar }: NavbarMenuProps) => {
  return (
    <div className={classes.navbar}>
      <span
        className={classes.close}
        onClick={() => {
          setNavbar("closed");
          document.body.style.overflow = "auto";

        }}
      >
        x
      </span>
      <span>Home</span>
      <span>Search</span>
      <span>Documentation</span>
    </div>
  );
};

export default NavbarMenu;
