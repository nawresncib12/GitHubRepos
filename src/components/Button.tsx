import classes from "./Button.module.css";
interface ButtonProps {
  text: string;
  type: string;
}
const Button = (props: ButtonProps) => {
  
  return (
    <button
      className={`${classes.btn} ${
        props.type == "primary" ? classes.primary : classes.secondary
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
