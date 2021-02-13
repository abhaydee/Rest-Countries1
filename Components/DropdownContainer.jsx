import React from 'react'
import styles from "../styles/Dropdown.module.scss"
function DropdownContainer() {
    return (
        <div>
            <select name="country"  className={styles["country"]}>
                <option>Canada</option>
                <option>India</option>
            </select>
        </div>
    )
}

export default DropdownContainer
