import classes from "./Input.module.css";
interface InputProps {
  minWidth?: string;
}
const Input = ({ minWidth }: InputProps) => {
  return <input style={{ minWidth }} className={classes.input} />;
};

export default Input;
