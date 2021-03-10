import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Shofiqul Miraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <Services />
    </>
  );
}
