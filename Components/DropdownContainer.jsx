import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Dropdown.module.scss";
function DropdownContainer({ countryNames }) {
  const theme = useSelector((state) => state.countriesReducer.theme);
  countryNames = ["Filter by region", ...countryNames];
  return (
    <div>
      <select
        name="country"
        className={`${styles["country"]} ${
          theme === true ? styles["country__light"] : styles["country__dark"]
        }`}
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
