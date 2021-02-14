import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import IconMoon from "../images/moon.svg";
import IconSun from "../images/brightness.svg";
import { useDispatch } from "react-redux";
function Header() {
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();
  const handleTheme = () => {
    setTheme(!theme);
  };
  useEffect(() => {
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  }, [theme]);
  return (
    <div
      className={`${styles["header"]} ${
        theme === false ? styles["header__dark"] : styles["header__light"]
      }`}
    >
      <h3 className={styles["header__title"]}>Where in the world?</h3>
      <span className={styles["header__themesection"]}>
        <img
          src={theme === true ? IconMoon : IconSun}
          alt="theme-icon"
          className={styles["header__theme-image"]}
          width={30}
          height={30}
          onClick={handleTheme}
        />
        <p className={styles["header__themetitle"]}>
          {theme === true ? "Dark Mode" : "Light Mode"}
        </p>
      </span>
    </div>
  );
}

export default Header;
