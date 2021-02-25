import React from "react";
import LoaderLight from "../images/Light.svg";
import LoaderDark from "../images/Dark.svg";
import { useSelector } from "react-redux";
import styles from "../styles/loader.module.scss"
function Loader() {
  const theme = useSelector((state) => state.countriesReducer.theme);
  return (
    <div className={styles["loader"]}>
      <img src={theme === true ? LoaderLight : LoaderDark} alt="loader-icon" className={styles["loader__image"]} />
    </div>
  );
}

export default Loader;
