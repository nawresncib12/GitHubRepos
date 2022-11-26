import classes from "./RotatingImages.module.css";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import user4 from "../../assets/user4.svg";
import user5 from "../../assets/user5.svg";
import { useState } from "react";
interface RotatingImagesProps {}
const RotatingImages = (props: RotatingImagesProps) => {
  const [show, setShow] = useState(true);
  return (
      <div className={classes.rotatingImages}>
        <div className={classes.cirle}>
          <img
            className={`${classes.element} ${classes.pos1} ${
              !show ? classes.hide : ""
            }`}
            src={user1}
          />
          <img
            className={`${classes.element} ${classes.pos2} ${
              !show ? classes.hide : ""
            }`}
            src={user2}
          />
          <img
            className={`${classes.element} ${classes.pos3} ${
              !show ? classes.hide : ""
            }`}
            src={user3}
          />
          <img
            className={`${classes.element} ${classes.pos4} ${
              !show ? classes.hide : ""
            }`}
            src={user4}
          />
          <img
            className={`${classes.element} ${classes.pos5} ${
              !show ? classes.hide : ""
            }`}
            src={user5}
          />
        </div>
      </div>
  );
};

export default RotatingImages;
