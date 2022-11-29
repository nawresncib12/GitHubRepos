import classes from "./IconTitle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IconTitleProps {
  icon: any;
  color: string;
  text?: string;
  link?: boolean;
}

const IconTitle = ({ icon, color, text, link }: IconTitleProps) => {
  return (
    <div className={classes.iconTitle}>
      <FontAwesomeIcon icon={icon} color={color} />
      {link ? (
        <a href={"https://www." + text}>
          <p>{text}</p>
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default IconTitle;
