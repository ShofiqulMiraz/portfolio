import Head from "next/head";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact | Shofiqul Miraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Contact />
    </>
  );
}
