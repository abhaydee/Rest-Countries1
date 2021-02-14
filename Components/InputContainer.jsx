import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import styles from "../styles/input.module.scss"
function InputContainer() {
    const [input,setInput]=useState("")
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    const theme=useSelector((state)=>state.countriesReducer.theme)
    return (
        <div>
            <input className={`${styles["input"]} ${theme===true?styles["input__light"]:styles["input__dark"]}`} name="country-name" type="text" onChange={handleChange} value={input} placeholder="Enter the country" />
        </div>
    )
}

export default InputContainer
