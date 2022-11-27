import classes from "./SearchBar.module.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast } from "react-toastify";
interface SearchBarProps {
  required?: boolean;
  style?: Object;
  placeholder?: string;
  onEnter?: (value?: string) => void;
}
const SearchBar = ({
  required,
  placeholder,
  onEnter,
  style,
}: SearchBarProps) => {
  const [value, setValue] = useState("");
  const handleChange = (entered: string) => {
    setValue(entered);
  };
  const handleSearch = () => {
    if (!value && required) {
      toast.error("Please fill in search value");
    } else {
      onEnter?.(value);
    }
  };
  return (
    <div className={classes.searchBar}>
      <div>
        <input
          style={style}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder={placeholder}
          className={classes.input}
        />
        <Button
          noHover
          onClick={handleSearch}
          type="primary"
          borderRadius="0 15px 15px 0"
        >
          <FontAwesomeIcon className={classes.icon} icon={faSearch} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
