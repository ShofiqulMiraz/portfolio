import { Code2, Globe2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { education, profile } from "~/data/portfolio";
import { Section } from "./Section";

const stats = [
    { value: "5+", label: "Years building products" },
    { value: "20+", label: "Apps & services shipped" },
    { value: "∞", label: "Bugs squashed" },
];

const focuses = [
    {
        icon: Sparkles,
        title: "AI & real-time",
        body: "Voice agents, LLM tooling, and streaming UIs at Puretalk AI.",
    },
    {
        icon: Code2,
        title: "Full-stack web",
        body: "TypeScript end-to-end — React, Node, and Postgres in production.",
    },
    {
        icon: Globe2,
        title: "Remote-first",
        body: "Comfortable working async across time zones and small teams.",
    },
];

export function About() {
    return (
        <Section id="about" eyebrow="About" title={<>A little bit about me.</>}>
            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5 text-base text-text-muted leading-relaxed sm:text-lg"
                >
                    <p>
                        I'm a software developer based in {profile.location}. Over the past few
                        years I've worked across web, mobile, and AI products — moving comfortably
                        between TypeScript on the frontend, Python and Node.js on the backend, and
                        the cloud infrastructure that ties it together.
                    </p>
                    <p>
                        Right now I'm focused on building real-time, AI-driven experiences at{" "}
                        <span className="text-white">Puretalk AI</span>, while continuing to ship
                        full-stack products with{" "}
                        <span className="text-white">Codenine Limited</span>. I care about small
                        details: snappy interactions, thoughtful empty states, and code that the
                        next person can actually read.
                    </p>
                    <p>
                        Outside of shipping, I enjoy mentoring teammates, reviewing pull requests,
                        and learning from the open-source community.
                    </p>

                    <div className="grid grid-cols-3 gap-3 pt-4 sm:gap-4">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-2xl border border-border bg-card px-4 py-5 text-text"
                            >
                                <p className="font-bold font-display text-3xl text-gradient">
                                    {s.value}
                                </p>
                                <p className="mt-1 text-text-muted text-xs leading-snug">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-3 pt-2 sm:grid-cols-3">
                        {focuses.map(({ icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
                            >
                                <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-bg-subtle text-accent-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
                                    <Icon size={16} />
                                </span>
                                <p className="mt-4 font-medium text-sm text-white">{title}</p>
                                <p className="mt-1 text-sm text-text-muted leading-relaxed">
                                    {body}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex w-full flex-col gap-5 md:grid md:grid-cols-2 md:items-stretch lg:flex lg:flex-col"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
                        />
                        <div className="relative aspect-4/5 w-full md:aspect-3/2 lg:aspect-4/5">
                            <img
                                src={profile.profileImage}
                                alt={profile.name}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <p className="font-medium text-sm text-white">{profile.name}</p>
                                <p className="text-text-muted text-xs">{profile.role}</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-card p-6">
                        <h3 className="font-semibold text-accent-soft text-sm uppercase tracking-[0.18em]">
                            Education
                        </h3>
                        <ul className="mt-5 space-y-5">
                            {education.map((e) => (
                                <li key={e.degree}>
                                    <p className="font-medium text-sm text-white">{e.degree}</p>
                                    <p className="text-sm text-text-muted">{e.school}</p>
                                    <p className="mt-1 text-text-muted/80 text-xs">{e.period}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.aside>
            </div>
        </Section>
    );
}
