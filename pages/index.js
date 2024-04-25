import Head from "next/head";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Shofiqul Miraz</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Portfolio | Shofiqul Miraz" />
                <meta property="og:image" content="https://shofiqul-portfolio.vercel.app/projects/main-site.png" />
            </Head>
            <NavBar />
            <Header />
            <Services />
            <Skills />
            <Contact />
        </>
    );
}
