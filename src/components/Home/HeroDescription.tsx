import classes from "./HeroDescription.module.css";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
interface HeroDescriptionProps {
  more: () => void;
}
const HeroDescription = ({ more }: HeroDescriptionProps) => {
  const navigate = useNavigate();
  const toSearchUser = () => {
    navigate("/user");
  };
  return (
    <div className={classes.heroDescription + " flex-1"}>
      <h1>Lorem ipsum ipsum dolor adip consectetur</h1>
      <p>
        Lorem ipsum dolor consectetur adipiscing elitlo rem ipsum dolor
        consectetur adipiscing elit Lorem ipsum dolor consectetur adipiscing
        elitlo rem
      </p>
      <div className="row mt-20">
        <Button onClick={toSearchUser} type="primary" text="Start now" />
        <Button onClick={more} type="secondary" text="More" />
      </div>
    </div>
  );
};

export default HeroDescription;
