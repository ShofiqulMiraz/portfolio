import Head from "next/head";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";

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
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
