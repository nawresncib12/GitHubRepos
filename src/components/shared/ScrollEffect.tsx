import { useEffect } from "react";
import { useRef, useState } from "react";
import classes from "./ScrollEffect.module.css";
const ScrollEffect = ({ first, second }: any) => {
  const [shown, setShown] = useState(false);
  const move = () => {
    window.scrollTo(0, 0);
    setShown(!shown);
  };

  return (
    <div className={classes.scrollEffect}>
      <div
        onClick={move}
        className={`${classes.first} ${shown ? classes.show : ""}`}
      >
        {first}
      </div>
      <div id="second" className={classes.second}>
      {second}
      </div>
    </div>
  );
};

export default ScrollEffect;
