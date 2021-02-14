import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/countries.module.scss";
function Countries({ countries }) {
  return (
    <div className={`${styles["countries"]}`}>
      {countries?.map((country, index) => (
        <div key={index} className={styles["countries__card"]}>
          <img
            alt="countries"
            className={styles["countries__image"]}
            src={country.flag}
          />
          <div className={styles["countries__container"]}>
            <h3>
              <b>{country.name}</b>
            </h3>
            <p>{`Population: ${country.population}`}</p>
            <p>{`Capital: ${country.capital}`}</p>
            <p>{`Country: ${country.region}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
