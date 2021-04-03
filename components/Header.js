import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="/profilePic.PNG"
          alt="profilepic"
          width={140}
          height={140}
          className={styles.profilepic}
          data-aos="zoom-in"
        />
        <h2 className={styles.title} data-aos="fade-right">
          Shofiqul Islam Miraz
        </h2>
        <h3 className={styles.profession} data-aos="fade-left">
          Full Stack JavaScript Developer
        </h3>
        <div className={styles.cta} data-aos="fade-up">
          <a href="/" className={styles.cv} >
            Download CV
          </a>
          <Link href="/contact">
            <a className={styles.contact} >
              contact me
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
