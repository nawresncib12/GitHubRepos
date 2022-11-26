import classes from "./Search.module.css";
import RotatingImages from "../components/Search/RotatingImages";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Serach = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [fade, setFade] = useState(false);
  const handleInput = (value: string) => {
    setUser(value);
  };
  const handleSubmit = () => {
    if (!user) {
      alert("please fill in user name");
    } else {
      setFade(true);
      setTimeout(() => {
        navigate(`/user/${user}`);
      }, 1000);
    }
  };

  return (
    <div className={classes.search}>
      <RotatingImages fade={fade}></RotatingImages>
      <h1 className="heading-1 center-text">
        Search for a github user and start browsing his Repositories
      </h1>
      <Input
        onEnter={handleSubmit}
        onChange={(value) => {
          handleInput(value);
        }}
        placeholder="Github Username"
        minWidth="65%"
      ></Input>
      <Button
        onClick={handleSubmit}
        type="primary"
        text="search"
      ></Button>
    </div>
  );
};

export default Serach;
