import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import IconMoon from "../images/moon.svg";
import IconSun from "../images/brightness.svg";
import { StateProviderValue } from "../services/StateProvider";
function Header() {
  const [{theme},dispatch]=StateProviderValue();
  const [themes, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!themes);
    dispatch({
      type:"SET_THEME",
      payload:themes
    })
  };
  return (
    <div className={`${styles["header"]} ${themes===false?  styles["header__dark"] :styles["header__light"]}`}>
      <h3 className={styles["header__title"]}>Where in the world?</h3>
      <span className={styles["header__themesection"]}>
        <img
          src={themes === true ? IconMoon : IconSun}
          alt="theme-icon"
          className={styles["header__theme-image"]}
          width={30}
          height={30}
          onClick={handleTheme}
        />
        <p className={styles["header__themetitle"]}>
          {themes === true ? "Dark Mode" : "Light Mode"}
        </p>
      </span>
    </div>
  );
}

export default Header;
