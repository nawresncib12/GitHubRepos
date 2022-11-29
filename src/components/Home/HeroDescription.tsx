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
      <h1>Fetch Github Repositories per user</h1>
      <p>
        Browsing github repositories has never been easier, Fetch and filter by
        name public repositories of a specific user all while using a modern and
        user friendly web application.
      </p>
      <div className="row mt-20">
        <Button onClick={toSearchUser} type="primary" text="Start now" />
        <Button onClick={more} type="secondary" text="More" />
      </div>
    </div>
  );
};

export default HeroDescription;
