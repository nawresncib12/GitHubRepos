import classes from "./HeroDescription.module.css";
import Button from "../Button";
const HeroDescription = () => {
  return (
    <div className={classes.heroDescription + " flex-1"}>
      <h1>Lorem ipsum dolor adip consectetur</h1>
      <p>
        Lorem ipsum dolor consectetur adipiscing elitlo rem ipsum dolor
        consectetur adipiscing elit
      </p>
      <div className="row">
        <Button type="primary" text="Start now" />
        <Button type="secondary" text="More" />
      </div>
    </div>
  );
};

export default HeroDescription;
