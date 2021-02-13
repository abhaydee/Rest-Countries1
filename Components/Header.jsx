import React,{useState} from 'react'
import styles from  "../styles/Header.module.scss"
import IconMoon from "../images/moon.svg"
import IconSun from "../images/brightness.svg";
function Header() {
    const [theme,setTheme]=useState(true);
    const handleTheme=()=>{
        setTheme(!theme)
    }
    return (
        <div className={styles["header"]}>
           <h3 className={styles["header__title"]}>Where in the world?</h3>
           <span className={styles["header__themesection"]}> 
               <img src={theme===true? IconSun:IconMoon} alt="theme-icon" className={styles["header__theme-image"]} width={30} height={30} onClick={handleTheme}/>
               <p className={styles["header__themetitle"]}>Dark Mode</p>
           </span>
        </div>
    )
}

export default Header
