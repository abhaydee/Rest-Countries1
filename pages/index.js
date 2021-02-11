import React from "react";
import Head from "next/head"
import Header from "../Components/Header";
function Home() {
  return (
    <div>
      <Head>
        <title>Rest-Countries</title>
      </Head>
      <Header/>
    </div>
  );
}

export default Home;
