import styles from "../styles/Skills.module.scss";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const skills = [
  {
    image: `/skills/javascript.svg`,
    name: "Javascript",
  },
  {
    image: `/skills/react.svg`,
    name: "React Js",
  },
  {
    image: `/skills/redux.svg`,
    name: "Redux",
  },
  {
    image: `/skills/nextjs.svg`,
    name: "Next Js",
  },
  {
    image: `/skills/nodejs.svg`,
    name: "Node Js",
  },
  {
    image: `/skills/expressjs.svg`,
    name: "Express Js",
  },
  {
    image: `/skills/mongodb.svg`,
    name: "MongoDB",
  },
  {
    image: `/skills/git.svg`,
    name: "Git",
  },
  {
    image: `/skills/github.svg`,
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
            <div className={styles.content} key={index} data-aos="fade-up">
              <Image
                src={skill.image}
                alt={skill.name}
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
