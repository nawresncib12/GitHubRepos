import classes from "./Search.module.css";
import RotatingImages from "../components/Search/RotatingImages";
import SearchBar from "../components/shared/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Serach = () => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleSubmit = (value: any) => {
    setFade(true);
    setTimeout(() => {
      navigate(`/user/${value}`);
    }, 1000);
  };

  return (
    <div className={classes.search}>
      <ToastContainer />
      <RotatingImages fade={fade}></RotatingImages>
      <h1 className="heading-1 center-text">
        Search for a github user and start browsing his repositories
      </h1>
      <SearchBar
        required
        style={{ minWidth: "35vw" }}
        onEnter={(value) => {
          handleSubmit(value);
        }}
        placeholder="Github username.."
      ></SearchBar>
    </div>
  );
};

export default Serach;
