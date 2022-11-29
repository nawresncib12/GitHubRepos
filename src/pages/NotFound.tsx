import classes from "./NotFound.module.css";
import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div className={classes.notFound}>
      <Button onClick={backHome} type="primary">
        Home
      </Button>
    </div>
  );
};

export default NotFound;
