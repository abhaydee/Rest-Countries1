import React from "react";
import { useRouter } from "next/router";
import { getCountries } from "../services/apiservice";
import IconBack from "../images/left-arrow.svg";
import styles from "../styles/countrydetails.module.scss";
function CountryDetails({ countryData }) {
  const router = useRouter();
  console.log("the data", countryData);
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <button className={styles["button"]} onClick={handleClick}>
        <img
          src={IconBack}
          width={20}
          height={20}
          className={styles["button__image"]}
        />{" "}
        Back
      </button>
      <div className={styles["details-container"]}>
        <img
          className={styles["details-container__flag"]}
          src={countryData[0].flag}
          alt="flag-icon"
        />
        <div className={styles["details-container__primary"]}>
          <h5 className={styles["details-container__header"]}>
            {countryData[0].name}
          </h5>
          <p>Native Name:{countryData[0].nativeName}</p>
          <p>Population:{countryData[0].population}</p>
          <p>Region:{countryData[0].region}</p>
          <p>Sub Region{countryData[0].subregion}</p>
          <p>Capital:{countryData[0].capital}</p>
        </div>
        <div className={styles["details-container__secondary"]}>
          <p>Top Level Domain:{countryData[0].topLevelDomain}</p>
          {/* <p>Currencies:{countryData[0].currencies}</p> */}
          {/* <p>Languages:{countryData[0].languages.toString()}</p> */}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const countryData = await getCountries(
    `https://restcountries.eu/rest/v2/name/${query.name}`
  );
  return {
    props: {
      countryData,
    },
  };
}
export default CountryDetails;
