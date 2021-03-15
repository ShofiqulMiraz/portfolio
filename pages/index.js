import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [height, setheight] = useState(0);

  // tracking scroll position
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      setheight(window.scrollY);
    });
  };

  useEffect(() => {
    handleScroll();
  }, []);

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
