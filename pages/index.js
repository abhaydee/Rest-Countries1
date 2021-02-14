import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import InputContainer from "../Components/InputContainer";
import DropdownContainer from "../Components/DropdownContainer";
import { getCountries } from "../services/apiservice";
import Countries from "../Components/Countries";
import styles from "../styles/Home.module.scss";
import { useSelector } from "react-redux";
function Home({ countries }) {
  const theme=useSelector((state)=>state.countriesReducer.theme)
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
          <DropdownContainer />
        </div>
        <Countries countries={countries} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const countries = await getCountries("https://restcountries.eu/rest/v2/all");
  return {
    props: {
      countries,
    },
  };
}
export default Home;
