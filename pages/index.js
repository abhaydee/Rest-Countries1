import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import InputContainer from "../Components/InputContainer";
import DropdownContainer from "../Components/DropdownContainer";
import { getCountries } from "../services/apiservice";
import { StateProvider } from "../services/StateProvider";
import { initialState, countriesReducer } from "../services/reducer";
import Countries from "../Components/Countries";
function Home({ countries }) {
  console.log("the countries", countries);
  return (
    <StateProvider initialState={initialState} reducer={countriesReducer}>
      <Head>
        <title>Rest-Countries</title>
      </Head>
      <Header />
      <div className="input-parent">
        <InputContainer />
        <DropdownContainer />
      </div>
      <Countries countries={countries} />
    </StateProvider>
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
