import classes from "./Search.module.css";
import RotatingImages from "../components/Search/RotatingImages";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
const Serach = () => {
  return (
    <div className={classes.search}>
      <RotatingImages></RotatingImages>
      <h1 className="heading-1 center-text">
        Search for a github user and start browsing his Repositories
      </h1>
      <Input minWidth="65%"></Input>
      <Button type="primary" text="search"></Button>
    </div>
  );
};

export default Serach;
