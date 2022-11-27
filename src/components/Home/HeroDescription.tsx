import classes from "./HeroDescription.module.css";
import Button from "../shared/Button";
const HeroDescription = () => {
  return (
    <div className={classes.heroDescription + " flex-1"}>
      <h1>Lorem ipsum ipsum dolor adip consectetur</h1>
      <p>
        Lorem ipsum dolor consectetur adipiscing elitlo rem ipsum dolor
        consectetur adipiscing elit Lorem ipsum dolor consectetur adipiscing
        elitlo rem
      </p>
      <div className="row mt-20">
        <Button type="primary" text="Start now" />
        <Button type="secondary" text="More" />
      </div>
    </div>
  );
};

export default HeroDescription;
