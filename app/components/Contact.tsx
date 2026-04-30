import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { profile, socials } from "~/data/portfolio";
import { Section } from "./Section";

const contactRows = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: Globe, label: profile.website, href: `https://${profile.website}` },
];

export function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="Contact"
            title={<>Let's build something good.</>}
            description="Have a project in mind, a role to fill, or just want to say hi? My inbox is open."
        >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                <motion.a
                    href={`mailto:${profile.email}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-linear-to-br from-accent/15 via-card to-card p-8 transition-colors hover:border-accent/60"
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl transition-opacity group-hover:opacity-80"
                    />
                    <p className="text-accent-soft text-sm uppercase tracking-[0.2em]">Say hello</p>
                    <p className="mt-4 break-all font-display font-semibold text-xl leading-tight sm:text-3xl md:text-4xl">
                        {profile.email}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted transition-colors group-hover:text-white">
                        Send me a message
                        <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </div>
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="rounded-2xl border border-border bg-card p-6"
                >
                    <ul className="divide-y divide-border">
                        {contactRows.map(({ icon: Icon, label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-accent-soft"
                                >
                                    <span className="flex items-center gap-3">
                                        <Icon size={16} className="text-accent-soft" />
                                        {label}
                                    </span>
                                    <ArrowUpRight size={14} className="text-text-muted" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2 border-border border-t pt-4">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs transition-colors hover:border-accent/50 hover:text-white"
                            >
                                {s.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
