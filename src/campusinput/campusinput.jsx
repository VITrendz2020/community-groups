import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "./CampusInput.module.css";
import "./muiStyles.css";

function CampusInput({ campus, setCampus, hide }) {
  const handleChange = (event) => {
    setCampus(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        className={!hide ? styles.inputField : styles.inputFieldNav}
      >
        {!hide ? (
          <InputLabel id="demo-simple-select-helper-label">
            Select Campus
          </InputLabel>
        ) : null}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={campus}
          onChange={handleChange}
          className={!hide ? styles.inputText : styles.inputTextNav}
        >
          <MenuItem value={"vellore"}>VIT-Vellore</MenuItem>
          <MenuItem value={"chennai"}>VIT-Chennai</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default CampusInput;
