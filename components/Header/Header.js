import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image
        src="/profilePic.jpg"
        alt="profilepic"
        width={140}
        height={140}
        className={styles.profilepic}
        data-aos="fade-down"
      />
      <h2 className={styles.title} data-aos="fade-down">
        Shofiqul Islam Miraz
      </h2>
      <h3 className={styles.profession} data-aos="fade-up">
        Full Stack JavaScript Developer
      </h3>
      <div className={styles.cta} data-aos="fade-up" data-aos-delay="300">
        <a
          href="/Resume_Shofiqul.pdf"
          className={styles.cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        <Link href="/projects">
          <a className={styles.projects}>See Projects</a>
        </Link>
      </div>
    </div>
  );
}
