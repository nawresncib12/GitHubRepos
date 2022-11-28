import classes from "./IconTitle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconTitle = ({ icon, color, children, link }: any) => {
  return (
    <div className={classes.iconTitle}>
      <FontAwesomeIcon icon={icon} color={color} />
      <p>{children}</p>
    </div>
  );
};

export default IconTitle;
