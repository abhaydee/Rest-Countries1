import React from 'react'
import {useRouter} from "next/router"
import { getCountries } from '../services/apiservice';
import IconBack from "../images/left-arrow.svg"
import styles from "../styles/countrydetails.module.scss"
function CountryDetails({countryData}) {
    const router=useRouter();
    console.log("the data",countryData)
    const handleClick=()=>{
        router.push("/")
    }
    return (
        <div>
            <button className={styles["button"]} onClick={handleClick}><img src={IconBack} width={20} height={20} className={styles["button__image"]}/> Back</button>
            <div className={styles["details-container"]}>
                <img className={styles["details-container__flag"]} src={countryData[0].flag} alt="flag-icon"/>
            </div>
        </div>
    )
}

export async function getServerSideProps({query}){
    const countryData = await getCountries(
        `https://restcountries.eu/rest/v2/name/${query.name}`
      );
    return {
        props:{
            countryData
        }
    }
}
export default CountryDetails
