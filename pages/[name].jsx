import React from "react";
import { useRouter } from "next/router";
import { getCountries } from "../services/apiservice";
import IconBack from "../images/left-arrow.svg";
import styles from "../styles/countrydetails.module.scss";
import { useSelector } from "react-redux";
function CountryDetails({ countryData }) {
  const router = useRouter();
  const theme = useSelector((state) => state.countriesReducer.theme);
  console.log("the data", countryData[0].borders);
  const handleClick = () => {
    router.push("/");
  };
  let languages = countryData[0]?.languages?.map((item) => {
    return item.name;
  });
  let currencies = countryData[0]?.currencies?.map((item) => {
    return item.name;
  });
  return (
    <div
      className={`${
        theme === true ? styles["details__light"] : styles["details__dark"]
      }`}
    >
      <button
        className={`${styles["button"]} ${
          theme === true ? styles["button__light"] : styles["button__dark"]
        }`}
        onClick={handleClick}
      >
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
        <div className={styles["details-container__desktop"]}>
          <div className={styles["details-container__primary"]}>
            <h5 className={styles["details-container__header"]}>
              {countryData[0].name}
            </h5>
          </div>
          <div className={styles["details-container__content"]}>
            <div>
              <p>Native Name:{countryData[0].nativeName}</p>
              <p>Population:{countryData[0].population}</p>
              <p>Region:{countryData[0].region}</p>
              <p>Sub Region{countryData[0].subregion}</p>
              <p>Capital:{countryData[0].capital}</p>
            </div>
            <div>
              <p>Top Level Domain:{countryData[0].topLevelDomain}</p>
              <p>Currencies:{currencies.toString()}</p>
              <p>Languages:{languages.toString()}</p>
            </div>
          </div>
          <div>
            <p>Border Countries:</p>
            {countryData[0]?.borders?.map((border, index) => {
              return (
                <button
                  key={index}
                  className={`${styles["details-container__button"]} ${
                    theme === true
                      ? styles["details-container__button__light"]
                      : styles["details-container__button__dark"]
                  }`}
                >
                  {border}
                </button>
              );
            })}
          </div>
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
