import { motion } from "motion/react";
import { skillGroups } from "~/data/portfolio";
import { Section } from "./Section";

export function Skills() {
    return (
        <Section
            id="skills"
            eyebrow="Toolbox"
            title={<>The tools I reach for.</>}
            description="A pragmatic stack picked over years of shipping — chosen for clarity, performance, and developer joy."
        >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                        />
                        <h3 className="font-semibold text-accent-soft text-sm uppercase tracking-[0.18em]">
                            {group.title}
                        </h3>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-sm text-text"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
