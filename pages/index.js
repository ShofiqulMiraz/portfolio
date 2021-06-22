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
        <meta property="og:title" content="Portfolio | Shofiqul Miraz" />
        <meta
          property="og:image"
          content="blob:https://vercel.com/15734bf2-0586-464b-9353-72dd86a27f6f"
        />
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
