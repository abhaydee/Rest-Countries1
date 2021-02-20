import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import styles from "../styles/Dropdown.module.scss";
function DropdownContainer({ countryNames }) {
  const [optionValue, setOptionValue] = useState(null);
  const dispatch=useDispatch()
  const theme = useSelector((state) => state.countriesReducer.theme);
  countryNames = ["Filter by region", ...countryNames];
  const handleOption = (event) => {
    setOptionValue(event.target.value);
    dispatch({type:"SET_FILTER",payload:event.target.value})
  };
  return (
    <div>
      <select
        name="country"
        className={`${styles["country"]} ${
          theme === true ? styles["country__light"] : styles["country__dark"]
        }`}
        value={optionValue}
        onChange={handleOption}
      >
        {countryNames?.map((data, index) => {
          return (
            <option
              key={index}
              className={styles["country__option"]}
              value={data}
              selected={index === 0 && "selected"}
            >
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownContainer;
