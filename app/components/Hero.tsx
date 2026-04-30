import { ArrowRight, Download, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "~/data/portfolio";
import { scrollToSection } from "~/lib/scroll";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
};

export function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
            <div
                aria-hidden
                className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
            />

            <div className="container-page relative">
                <motion.div
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-start gap-6"
                >
                    <motion.div
                        variants={fadeUp}
                        custom={0}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-text-muted text-xs backdrop-blur"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Available for new opportunities
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        custom={1}
                        className="font-bold font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
                    >
                        Hi, I'm <span className="text-gradient">Shofiqul</span>.
                        <br />I build software
                        <br className="hidden sm:block" /> people enjoy using.
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="max-w-2xl text-lg text-text-muted leading-relaxed sm:text-xl"
                    >
                        {profile.summary}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        custom={3}
                        className="flex flex-wrap items-center gap-3 pt-2"
                    >
                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            className="group glow inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-sm text-white transition-all hover:bg-accent-soft"
                        >
                            Get in touch
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </button>
                        <a
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 font-medium text-sm transition-colors hover:border-accent/50"
                        >
                            <Download size={16} />
                            Download resume
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        custom={4}
                        className="flex items-center gap-2 pt-2 text-sm text-text-muted"
                    >
                        <MapPin size={14} />
                        {profile.location}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
