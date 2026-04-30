import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { profile, socials } from "~/data/portfolio";
import { type SectionId, scrollToSection } from "~/lib/scroll";

const links: { id: SectionId; label: string }[] = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const go = (id: SectionId) => {
        setOpen(false);
        scrollToSection(id);
    };

    return (
        <>
            <motion.header
                initial={{ y: -32, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled || open
                        ? "border-border border-b bg-bg/80 backdrop-blur-xl"
                        : "border-transparent border-b"
                }`}
            >
                <div className="container-page flex h-16 items-center justify-between">
                    <button
                        type="button"
                        onClick={() => go("top")}
                        className="cursor-pointer font-bold font-display text-lg tracking-tight"
                    >
                        <span className="text-gradient">SM.</span>
                    </button>

                    <nav className="hidden items-center gap-8 md:flex">
                        {links.map((l) => (
                            <button
                                key={l.id}
                                type="button"
                                onClick={() => go(l.id)}
                                className="cursor-pointer text-sm text-text-muted transition-colors hover:text-white"
                            >
                                {l.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <a
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-medium text-sm transition-all hover:border-accent/50 hover:bg-accent/10"
                        >
                            Resume
                        </a>
                    </div>

                    <button
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="relative z-60 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card transition-colors hover:border-accent/50 md:hidden"
                    >
                        <span className="relative h-4.5 w-4.5">
                            <Menu
                                size={18}
                                className={`absolute inset-0 transition-all duration-200 ease-out ${
                                    open
                                        ? "rotate-45 scale-75 opacity-0"
                                        : "rotate-0 scale-100 opacity-100"
                                }`}
                            />
                            <X
                                size={18}
                                className={`absolute inset-0 transition-all duration-200 ease-out ${
                                    open
                                        ? "rotate-0 scale-100 opacity-100"
                                        : "-rotate-45 scale-75 opacity-0"
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </motion.header>

            <MobileMenu open={open} onClose={() => setOpen(false)} onNavigate={go} />
        </>
    );
}

function MobileMenu({
    open,
    onClose,
    onNavigate,
}: {
    open: boolean;
    onClose: () => void;
    onNavigate: (id: SectionId) => void;
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    key="mobile-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-40 md:hidden"
                    aria-modal
                    role="dialog"
                >
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={onClose}
                        className="absolute inset-0 cursor-default bg-bg/70 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{
                            y: "-100%",
                            transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] },
                        }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex h-full flex-col overflow-y-auto pt-20 pb-10"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute top-10 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-accent-soft/15 blur-3xl"
                        />

                        <div className="container-page relative flex flex-1 flex-col">
                            <p className="font-medium text-text-muted text-xs uppercase tracking-[0.24em]">
                                Menu
                            </p>

                            <nav className="mt-6 flex flex-col">
                                {links.map((l, i) => (
                                    <motion.button
                                        key={l.id}
                                        type="button"
                                        onClick={() => onNavigate(l.id)}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.08 + i * 0.06,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="group flex cursor-pointer items-center justify-between border-border/70 border-b py-5 text-left"
                                    >
                                        <span className="flex items-baseline gap-3">
                                            <span className="font-mono text-accent-soft text-xs">
                                                0{i + 1}
                                            </span>
                                            <span className="font-display font-semibold text-3xl text-white tracking-tight transition-colors group-hover:text-accent-soft">
                                                {l.label}
                                            </span>
                                        </span>
                                        <ArrowUpRight
                                            size={20}
                                            className="text-text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
                                        />
                                    </motion.button>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-8 grid gap-3"
                            >
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-accent/50"
                                >
                                    <span className="flex items-center gap-3">
                                        <Mail size={18} className="text-accent-soft" />
                                        <span className="text-sm">{profile.email}</span>
                                    </span>
                                    <ArrowUpRight
                                        size={16}
                                        className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                                <a
                                    href={profile.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between rounded-2xl bg-accent px-5 py-4 transition-colors hover:bg-accent-soft"
                                >
                                    <span className="font-medium text-sm text-white">
                                        Download resume
                                    </span>
                                    <ArrowUpRight
                                        size={16}
                                        className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mt-auto flex items-center justify-between gap-3 pt-10 text-text-muted text-xs"
                            >
                                <p>{profile.location}</p>
                                <div className="flex flex-wrap gap-2">
                                    {socials.map((s) => (
                                        <a
                                            key={s.label}
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-border bg-bg-subtle px-3 py-1.5 transition-colors hover:border-accent/50 hover:text-white"
                                        >
                                            {s.label}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
