import styles from "./Skills.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const skills = [
  {
    image: `/Skills/javascript.svg`,
    name: "Javascript",
  },
  {
    image: `/Skills/react.svg`,
    name: "React Js",
  },
  {
    image: `/Skills/redux.svg`,
    name: "Redux",
  },
  {
    image: `/Skills/nextjs.svg`,
    name: "Next Js",
  },
  {
    image: `/Skills/nodejs.svg`,
    name: "Node Js",
  },
  {
    image: `/Skills/expressjs.svg`,
    name: "Express Js",
  },
  {
    image: `/Skills/mongodb.svg`,
    name: "MongoDB",
  },
  {
    image: `/Skills/git.svg`,
    name: "Git",
  },
  {
    image: `/Skills/github.svg`,
    name: "Github",
  },
];

export default function Skills() {
  return (
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
              data-aos="zoom-in"
              data-aos-delay="500"
            />
            <h3
              className={styles.title}
              data-aos="zoom-out"
              data-aos-delay="550"
            >
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
