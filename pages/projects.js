import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";

export default function Project() {
    return (
        <>
            <Head>
                <title>Projects | Shofiqul Miraz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Projects />
        </>
    );
}
