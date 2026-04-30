import { motion } from "motion/react";
import { experiences } from "~/data/portfolio";
import { formatDuration, formatPeriod } from "~/lib/period";
import { Section } from "./Section";

export function Experience() {
    return (
        <Section
            id="experience"
            eyebrow="Experience"
            title={<>Where I've been building.</>}
            description="Four roles, one constant: shipping software that solves real problems."
        >
            <ol className="relative space-y-6 border-border border-l pl-6 sm:pl-8">
                {experiences.map((exp, i) => (
                    <motion.li
                        key={`${exp.company}-${exp.role}`}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.06 }}
                        className="relative"
                    >
                        <span className="absolute top-2 -left-7.5 flex h-3 w-3 sm:-left-9.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                        </span>

                        <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <div>
                                    <h3 className="font-display font-semibold text-lg text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-accent-soft text-sm">{exp.company}</p>
                                </div>
                                <div className="flex flex-col items-start gap-1.5 sm:items-end">
                                    <p className="text-text-muted text-xs">
                                        {formatPeriod(exp.start, exp.end)}
                                    </p>
                                    <span className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 font-medium text-[11px] text-accent-soft">
                                        {formatDuration(exp.start, exp.end)}
                                    </span>
                                </div>
                            </div>
                            <ul className="mt-4 space-y-2 text-sm text-text-muted">
                                {exp.highlights.map((h) => (
                                    <li key={h} className="flex gap-2">
                                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </Section>
    );
}
