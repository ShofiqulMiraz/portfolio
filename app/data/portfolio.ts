export const profile = {
    name: "Shofiqul Islam Miraz",
    role: "Senior Software Developer",
    location: "Barishal, Bangladesh",
    email: "simiraz90@gmail.com",
    phone: "+8801795834054",
    website: "shofiqulmiraz.com",
    resumeUrl: "/Resume_Shofiqul.pdf",
    profileImage: "/profilePic.jpg",
    tagline: "I build performant, full-stack web and mobile products — from API to pixel.",
    summary:
        "Full-stack software developer with 4+ years of experience shipping production web, mobile, and AI-driven applications. I specialize in TypeScript, React and Python — turning fuzzy product requirements into reliable, well-tested systems that scale.",
};

export type Experience = {
    role: string;
    company: string;
    /** YYYY-MM, or YYYY when only the year is known. */
    start: string;
    /** YYYY-MM, YYYY, or null for "Present". */
    end: string | null;
    highlights: string[];
};

export const experiences: Experience[] = [
    {
        role: "Senior Software Developer",
        company: "Puretalk AI",
        start: "2024-05",
        end: null,
        highlights: [
            "Lead development of AI-powered conversational products built on top of LLM tooling.",
            "Architect TypeScript services and React front-ends for real-time voice and chat experiences.",
            "Drive code quality, review standards, and mentoring across the engineering team.",
        ],
    },
    {
        role: "Software Developer",
        company: "Codenine Limited",
        start: "2022-02",
        end: null,
        highlights: [
            "Build and maintain customer-facing web applications using Next.js, React, and Node.js.",
            "Design REST and GraphQL APIs backed by PostgreSQL and MongoDB.",
            "Own deployments on Microsoft Azure, Vercel, and DigitalOcean.",
        ],
    },
    {
        role: "Software Developer",
        company: "Nexa Global Holdings Limited",
        start: "2021-07",
        end: "2024-12",
        highlights: [
            "Deliver full-stack features for internal tooling and client products.",
            "Implement Django and Node.js services, integrated with React and React Native clients.",
        ],
    },
    {
        role: "Freelance Software Developer",
        company: "Fiverr",
        start: "2021",
        end: null,
        highlights: [
            "Ship end-to-end web and mobile apps for international clients.",
            "Maintain a strong reputation for clean code, on-time delivery, and clear communication.",
        ],
    },
];

export type SkillGroup = {
    title: string;
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: "Languages",
        items: ["TypeScript", "JavaScript", "Python"],
    },
    {
        title: "Frontend",
        items: ["React", "Next.js", "React Router", "React Native", "Tailwind CSS"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Django", "REST APIs", "GraphQL"],
    },
    {
        title: "Data",
        items: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
        title: "Cloud & DevOps",
        items: ["Microsoft Azure", "Vercel", "DigitalOcean", "Docker", "Git"],
    },
];

export const education = [
    {
        degree: "Master of Science",
        school: "University of Barishal",
        period: "2022 — 2024",
    },
    {
        degree: "Bachelor of Science",
        school: "University of Barishal",
        period: "2017 — 2022",
    },
];

export const socials = [
    { label: "GitHub", href: "https://github.com/ShofiqulMiraz" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shofiqulmiraz/" },
    { label: "Email", href: "mailto:simiraz90@gmail.com" },
];
