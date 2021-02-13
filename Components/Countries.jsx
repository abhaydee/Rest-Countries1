import React from "react";
import styles from "../styles/countries.module.scss";
function Countries({ countries }) {
  return (
    <div className={styles["countries"]}>
      {countries?.map((country, index) => (
        <div key={index} className={styles["countries__card"]}>
          <img
            alt="countries"
            className={styles["countries__image"]}
            src={country.flag}
          />
          <div class="container">
            <h4>
              <b>{country.name}</b>
            </h4>
            <p>{country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
