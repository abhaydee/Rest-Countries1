import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import InputContainer from "../Components/InputContainer";
import DropdownContainer from "../Components/DropdownContainer";
import { getCountries } from "../services/apiservice";
import Countries from "../Components/Countries";
import styles from "../styles/Home.module.scss";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const [countries, setCountries] = useState(null);
  const dispatch = useDispatch();
  let theme = useSelector((state) => state.countriesReducer.theme);
  let searchInput = useSelector((state) => state.countriesReducer.searchInput);
  let allCountries = useSelector(
    (state) => state.countriesReducer.allCountries
  );
  console.log("the searchedInput", searchInput);
  let countryNames = countries?.map((country, index) => {
    return country.name;
  });
  useEffect(() => {
    async function getCountriesData() {
      const countriesdata = await getCountries(
        "https://restcountries.eu/rest/v2/all"
      );
      dispatch({ type: "ALL_COUNTRIES", payload: countriesdata });
      setCountries(countriesdata);
    }
    getCountriesData();
  }, []);
  useEffect(() => {
    let filteredValues = [];
    filteredValues = countries?.filter(({ name }) => {
      console.log("the name", name.toLowerCase(), searchInput);
      return name.toLowerCase().includes(searchInput);
    });
    if (filteredValues?.length > 0 && searchInput !== "") {
      setCountries(filteredValues);
    } else {
      setCountries(allCountries);
    }
  }, [searchInput]);
  return (
    <>
      <Head>
        <title>Rest-Countries</title>
      </Head>
      <div
        className={
          theme === true ? styles["theme-light"] : styles["theme-dark"]
        }
      >
        <Header />
        <div className="input-parent">
          <InputContainer />
          <DropdownContainer countryNames={countryNames} />
        </div>
        <Countries countries={countries} />
      </div>
    </>
  );
}

export default Home;
