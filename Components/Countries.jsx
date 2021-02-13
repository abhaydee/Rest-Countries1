import React from "react";
import styles from "../styles/countries.module.scss";
function Countries({ countries }) {
  return (
    <div className={styles["countries"]}>
      <div className={styles["countries__card"]}>
        <img  alt="countries" className={styles["countries__image"]} />
        <div class="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Countries;
