import styles from "./Skills.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
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
