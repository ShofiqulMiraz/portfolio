import Head from "next/head";
import NavBar from "../components/NavBar";
import Services from "../components/Services";

export default function Service() {
  return (
    <>
      <Head>
        <title>Services | Shofiqul Miraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Services />
    </>
  );
}
