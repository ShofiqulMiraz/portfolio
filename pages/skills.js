import Head from "next/head";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";

export default function Skill() {
  return (
    <>
      <Head>
        <title>Skills | Shofiqul Miraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Skills />
    </>
  );
}
