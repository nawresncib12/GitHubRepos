import { ReactNode } from "react";
import classes from "./Button.module.css";
interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  text?: string;
  type: string;
  borderRadius?: string;
  disabled?: boolean;
  noHover?: boolean;
}
const Button = (props: ButtonProps) => {
  return (
    <button
      style={{ borderRadius: props.borderRadius || "" }}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${classes.btn} ${
        props.type === "primary" ? classes.primary : classes.secondary
      } ${
        props.noHover ? classes.noHover :""
      }`}
    >
      {props.text}
      {props.children}
    </button>
  );
};

export default Button;
