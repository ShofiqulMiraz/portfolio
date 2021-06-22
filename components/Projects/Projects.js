import styles from "./Projects.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const projects = [
  {
    image: "/projects/startup-landing.png",
    name: "startup-landing",
    website: "https://startup-landing-nine.vercel.app",
  },
  {
    image: "/projects/cs-alert.png",
    name: "cs-alert",
    website: "https://cs-alert-front.vercel.app",
  },
  {
    image: "/projects/rest-countries.png",
    name: "rest-countries",
    website: "https://rest-countries-api-ashen.vercel.app",
  },
  {
    image: "/projects/tesla.png",
    name: "tesla-clone",
    website: "https://tesla-clone-seven.vercel.app",
  },
  {
    image: "/projects/admin-dashboard.png",
    name: "dashboard-pr",
    website: "https://admin-dashboard-pr.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <SectionTitle title="projects" />
      <div className={styles.card}>
        {projects.map((project, index) => (
          <a
            href={project.website}
            key={index}
            className={styles.content}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imagecontainer} data-aos="fade-up">
              <Image
                src={project.image}
                alt="Project Image"
                width={408}
                height={256}
                layout="responsive"
              />
              <div className={styles.imageoverlay}>
                <div className={styles.projectname}>{project.name}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
