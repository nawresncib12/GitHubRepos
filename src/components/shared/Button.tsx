import classes from "./Button.module.css";
interface ButtonProps {
  onClick?: () => void;
  text: string;
  type: string;
  disabled?: boolean;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${classes.btn} ${
        props.type === "primary" ? classes.primary : classes.secondary
      }`}
    >
      {props.text}
    </button>
  );
};

export default Button;
