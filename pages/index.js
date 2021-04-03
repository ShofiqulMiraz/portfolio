import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home({ height }) {
  return (
    <>
      <Head>
        <title>Portfolio | Shofiqul Miraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar height={height} />
      <Header />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
