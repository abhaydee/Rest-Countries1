import React from "react";
import Head from "next/head";
import Header from "../Components/Header";
import InputContainer from "../Components/InputContainer";
import DropdownContainer from "../Components/DropdownContainer";
function Home() {
  return (
    <div>
      <Head>
        <title>Rest-Countries</title>
      </Head>
      <Header />
      <div className="input-parent">
        <InputContainer />
        <DropdownContainer />
      </div>
    </div>
  );
}

export default Home;
