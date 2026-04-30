import { About } from "~/components/About";
import { Contact } from "~/components/Contact";
import { Experience } from "~/components/Experience";
import { Footer } from "~/components/Footer";
import { Hero } from "~/components/Hero";
import { NavBar } from "~/components/NavBar";
import { Skills } from "~/components/Skills";
import { profile } from "~/data/portfolio";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
    const title = `${profile.name} — ${profile.role}`;
    const description = profile.summary;
    return [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:image", content: profile.profileImage },
        { name: "twitter:card", content: "summary_large_image" },
    ];
}

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
