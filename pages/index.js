import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const InputContainer = dynamic(() => import("../Components/InputContainer"));
const DropdownContainer = dynamic(() =>
  import("../Components/DropdownContainer")
);
import { getCountries } from "../services/apiservice";
const Countries = dynamic(() => import("../Components/Countries"));
import styles from "../styles/Home.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Components/Loader";
function Home() {
  const [countries, setCountries] = useState(null);
  const [region, setRegions] = useState(null);
  const [loader, setLoader] = useState(null);
  const dispatch = useDispatch();
  let theme = useSelector((state) => state.countriesReducer.theme);
  let searchInput = useSelector((state) => state.countriesReducer.searchInput);
  let allCountries = useSelector(
    (state) => state.countriesReducer.allCountries
  );
  let optionFilter = useSelector((state) => state.countriesReducer.filter);
  let countryNames = countries?.map((country, index) => {
    return country.name;
  });
  let regionNames = allCountries?.map((country, index) => {
    return country.region;
  });
  let set = new Set(regionNames);
  let regionArray = [...set];
  useEffect(() => {
    setLoader(true);
    async function getCountriesData() {
      const countriesdata = await getCountries(
        "https://restcountries.eu/rest/v2/all"
      );
      dispatch({ type: "ALL_COUNTRIES", payload: countriesdata });
      setCountries(countriesdata);
      setLoader(false);
    }
    getCountriesData();
  }, []);
  useEffect(() => {
    let filteredValues = [];
    filteredValues = countries?.filter(({ name }) => {
      return name.toLowerCase().includes(searchInput);
    });
    if (filteredValues?.length > 0 && searchInput !== "") {
      setCountries(filteredValues);
    } else {
      setCountries(allCountries);
    }
  }, [searchInput]);
  useEffect(() => {
    if (optionFilter !== "Filter by region") {
      let regionValues = [];
      regionValues = allCountries?.filter(({ region }) => {
        return region.includes(optionFilter);
      });
      setCountries(regionValues);
    }
  }, [optionFilter]);
  return (
    <div>
      <Head>
        <title>Rest-Countries</title>
      </Head>
      <div
        className={
          theme === true ? styles["theme-light"] : styles["theme-dark"]
        }
      >
        <div className={"input-parent"}>
          <InputContainer />
          <DropdownContainer countryNames={regionArray} />
        </div>
        {loader === true ? <Loader /> : <Countries countries={countries} />}
      </div>
    </div>
  );
}

export default Home;
