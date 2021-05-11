import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
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
        <div className={styles.cta} data-aos="fade-up">
          <a
            href="https://docs.google.com/document/d/1Y_ePnAith45FC55bBZ2NS4lB0RhLSWrskaU-PMTIjqI/edit?usp=sharing"
            className={styles.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <Link href="/contact">
            <a className={styles.contact}>contact me</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
