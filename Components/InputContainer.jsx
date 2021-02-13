import React,{useState} from 'react'
import styles from "../styles/input.module.scss"
function InputContainer() {
    const [input,setInput]=useState("")
    const handleChange=(event)=>{
        setInput(event.target.value)
    }
    return (
        <div>
            <input className={styles["input"]} name="country-name" type="text" onChange={handleChange} value={input} placeholder="Enter the country" />
        </div>
    )
}

export default InputContainer
