import styles from "./Projects.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

const projects = [
  {
    image: "/Projects/startup-landing.png",
    name: "startup-landing",
    website: "https://startup-landing-nine.vercel.app",
  },
  {
    image: "/Projects/cs-alert.png",
    name: "cs-alert",
    website: "https://cs-alert-front.vercel.app",
  },
  {
    image: "/Projects/rest-countries.png",
    name: "rest-countries",
    website: "https://rest-countries-api-ashen.vercel.app",
  },
  {
    image: "/Projects/tesla.png",
    name: "tesla-clone",
    website: "https://tesla-clone-seven.vercel.app",
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
              <img
                src={project.image}
                alt="Project Image"
                className={styles.image}
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
