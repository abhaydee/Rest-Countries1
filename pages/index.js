import React from "react";
import Head from "next/head"
import Header from "../Components/Header";
import InputContainer from "../Components/InputContainer";
function Home() {
  return (
    <div>
      <Head>
        <title>Rest-Countries</title>
      </Head>
      <Header/>
      <InputContainer/>
    </div>
  );
}

export default Home;
