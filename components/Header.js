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
        />
        <h2 className={styles.title}>Shofiqul Islam Miraz</h2>
        <h3 className={styles.profession}>MERN Stack Developer</h3>
        <div className={styles.cta}>
          <a href="/" className={styles.cv}>
            Download CV
          </a>
          <Link href="/contact">
            <a className={styles.contact}>contact</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
