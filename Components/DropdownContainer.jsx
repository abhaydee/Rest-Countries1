import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/Dropdown.module.scss"
function DropdownContainer() {
    const theme=useSelector((state)=>state.countriesReducer.theme)
    return (
        <div>
            <select name="country"  className={`${styles["country"]} ${theme===true?styles["country__light"]:styles["country__dark"]}`}>
                <option>Canada</option>
                <option>India</option>
            </select>
        </div>
    )
}

export default DropdownContainer
