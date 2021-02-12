import React from 'react'
import styles from  "../styles/Header.module.scss"
function Header() {
    return (
        <div className={styles["header"]}>
           <h3 className={styles["header__title"]}>Where in the world?</h3>
        </div>
    )
}

export default Header
