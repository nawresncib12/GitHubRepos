import classes from "./Home.module.css";
import { useState } from "react";
import HeroDescription from "../components/Home/HeroDescription";
import HeroImage from "../components/Home/HeroImage";
import More from "../components/Home/More";
const Home = () => {
  const [shown, setShown] = useState("initial");
  /**
   * shows more section
   */
  const more = () => {
    // scroll to top to see the section from start
    window.scrollTo(0, 0);
    /**
     * give 1 second for animation execution
     * remove home section
     */
    setTimeout(() => {
      setShown("gone");
    }, 1000);
  };
  /**
   * shows home section
   */
  const home = () => {
    /**
     * scroll to top to see the section from start
     * remove more section
     */
    window.scrollTo(0, 0);
    setShown("back");
  };
  return (
    <>
      <div className={`${shown === "gone" && classes.hidden} grid-2 `}>
        <HeroDescription more={more}></HeroDescription>
        <HeroImage></HeroImage>
      </div>

      <div
        className={`${classes.second} ${
          shown !== "initial"
            ? shown === "back"
              ? classes.stopped
              : classes.viewed
            : classes.hidden
        }`}
      >
        <More home={home}></More>
      </div>
    </>
  );
};

export default Home;
