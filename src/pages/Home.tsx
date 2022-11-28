import { useState } from "react";
import HeroDescription from "../components/Home/HeroDescription";
import HeroImage from "../components/Home/HeroImage";
import More from "../components/Home/More";
import classes from "./Home.module.css";
const Home = () => {
  const [shown, setShown] = useState("initial");
  const more = () => {
    window.scrollTo(0, 0);
    setShown("loading");
    setTimeout(() => {
      setShown("gone");
    }, 1000);
  };
  const home = () => {
    window.scrollTo(0, 0);
    setShown("initial");
    setTimeout(() => {
      setShown("initial");
    }, 1000);
  };
  return (
    <>
      <div className={`${shown == "gone" && classes.hidden} grid-2 `}>
        <HeroDescription more={more}></HeroDescription>
        <HeroImage></HeroImage>
      </div>

      <div
        className={`${classes.second} ${
          shown != "initial" ? classes.viewed : classes.stopped
        }`}
      >
        <More home={home}></More>
      </div>
    </>
  );
};

export default Home;
