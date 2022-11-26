import classes from "./Input.module.css";
interface InputProps {
  minWidth?: string | "";
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: () => void;
}
const Input = ({ minWidth, placeholder, onChange, onEnter }: InputProps) => {
  return (
    <input
      onChange={(e) => {
        onChange?.(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter?.();
        }
      }}
      placeholder={placeholder}
      style={{ minWidth }}
      className={classes.input}
    />
  );
};

export default Input;
