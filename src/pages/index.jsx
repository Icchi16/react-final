import React from "react";
import Head from "next/head";
import Link from "next/link";

const App = () => {
  return (
    <h1>
      <Head>
        <title>Next JS</title>
        <link rel="icon" href="/images/icon.ico" />
      </Head>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </h1>
  );
};

export default App;
