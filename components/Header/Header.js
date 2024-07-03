import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <div className={styles.container}>
            <Image src="/profilePic.jpg" alt="profile_pic" width={140} height={140} className={styles.profile_pic} data-aos="fade-down" />
            <h2 className={styles.title} data-aos="fade-down">
                Shofiqul Islam Miraz
            </h2>
            <h3 className={styles.profession} data-aos="fade-up">
                Software Developer, CodeNine Limited.
            </h3>
            <div className={styles.cta} data-aos="fade-up" data-aos-delay="300">
                <a href="/Resume_Shofiqul.pdf" className={styles.cv} target="_blank" rel="noopener noreferrer">
                    Download CV
                </a>
                <Link href="/services" className={styles.services}>
                    See Services
                </Link>
            </div>
        </div>
    );
}
