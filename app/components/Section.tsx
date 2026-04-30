import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
    id: string;
    eyebrow: string;
    title: ReactNode;
    description?: ReactNode;
    children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: Props) {
    return (
        <section id={id} className="scroll-mt-24 py-20 sm:py-28">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 max-w-2xl"
                >
                    <p className="mb-3 font-medium text-accent-soft text-xs uppercase tracking-[0.2em]">
                        {eyebrow}
                    </p>
                    <h2 className="font-bold font-display text-3xl tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-4 text-base text-text-muted sm:text-lg">{description}</p>
                    )}
                </motion.div>
                {children}
            </div>
        </section>
    );
}
