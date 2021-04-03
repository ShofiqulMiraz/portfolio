import styles from "../styles/Projects.module.scss";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    image: "/cs-alert.png",
    name: "cs-alert",
    website: "https://cs-alert-front.vercel.app/",
  },
  {
    image: "/tesla.png",
    name: "tesla",
    website: "https://tesla-clone-seven.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle title="projects" />
        <div className={styles.card}>
          {projects.map((project, index) => (
            <a
              href={project.website}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.imagecontainer} data-aos="fade-up">
                <img
                  src={project.image}
                  alt="Avatar"
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
    </>
  );
};

export default Projects;
