import styles from "../styles/Skills.module.scss";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const skills = [
  {
    image: `javascript.svg`,
    name: "Javascript",
  },
  {
    image: `react.svg`,
    name: "React Js",
  },
  {
    image: `redux.svg`,
    name: "Redux",
  },
  {
    image: `nextjs.svg`,
    name: "Next Js",
  },
  {
    image: `nodejs.svg`,
    name: "Node Js",
  },
  {
    image: `expressjs.svg`,
    name: "Express Js",
  },
  {
    image: `mongodb.svg`,
    name: "MongoDB",
  },
  {
    image: `git.svg`,
    name: "Git",
  },
  {
    image: `github.svg`,
    name: "Github",
  },
];

const Skills = () => {
  return (
    <>
      <div className={styles.container}>
        <SectionTitle title="skills" />
        <div className={styles.card}>
          {skills.map((skill, index) => (
            <div className={styles.content} key={index} data-aos="fade-right">
              <Image
                src={`/${skill.image}`}
                alt={`skill-${index}`}
                width={80}
                height={80}
              />
              <h3 className={styles.title}> {skill.name} </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
