import React from 'react'
import {useRouter} from "next/router"
import { getCountries } from '../services/apiservice';
function CountryDetails({countryData}) {
    const router=useRouter();
    console.log("the data",countryData)
    return (
        <div>
            Hey
        </div>
    )
}

export async function getServerSideProps({query}){
    const countryData = await getCountries(
        `https://restcountries.eu/rest/v2/name/${query.name}`
      );
      console.log('the data',countryData)
    return {
        props:{
            countryData
        }
    }
}
export default CountryDetails
