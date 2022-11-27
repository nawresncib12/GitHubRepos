import classes from "./ModeSwitch.module.css";
import Light from "../../assets/Light";
import Night from "../../assets/Night";

const ModeSwitch = ({ changeMode, mode }: any) => {
  return (
    <div
      onClick={changeMode}
      className={`${classes.mode}  ${mode == "light" ? "" : classes.dark}`}
    >
      {mode == "light" ? (
        <Light width={20} height={20}></Light>
      ) : (
        <Night width={20} height={20}></Night>
      )}
    </div>
  );
};

export default ModeSwitch;
