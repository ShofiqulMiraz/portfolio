export type SectionId = "top" | "about" | "experience" | "skills" | "contact";

export function scrollToSection(id: SectionId) {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}
