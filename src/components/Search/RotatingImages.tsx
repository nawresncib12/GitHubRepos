import classes from "./RotatingImages.module.css";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import user4 from "../../assets/user4.svg";
import user5 from "../../assets/user5.svg";
interface RotatingImagesProps {
  fade: boolean;
}
const RotatingImages = ({ fade }: RotatingImagesProps) => {
  return (
    <div className={classes.rotatingImages}>
      <div className={classes.cirle}>
        <img
          alt="user"
          className={`${classes.element} ${classes.pos1} ${
            fade ? classes.hide : ""
          }`}
          src={user1}
        />
        <img
          alt="user"
          className={`${classes.element} ${classes.pos2} ${
            fade ? classes.hide : ""
          }`}
          src={user2}
        />
        <img
          alt="user"
          className={`${classes.element} ${classes.pos3} ${
            fade ? classes.hide : ""
          }`}
          src={user3}
        />
        <img
          alt="user"
          className={`${classes.element} ${classes.pos4} ${
            fade ? classes.hide : ""
          }`}
          src={user4}
        />
        <img
          alt="user"
          className={`${classes.element} ${classes.pos5} ${
            fade ? classes.hide : ""
          }`}
          src={user5}
        />
      </div>
    </div>
  );
};

export default RotatingImages;
