import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const handleMenuOpen = () => {
    setmobilemenuopen(true);
  };
  const handleMenuClose = () => {
    setmobilemenuopen(false);
  };
  const MenuShow = () => (
    <ul className={styles.navlist}>
      <li className={styles.navlinks} onClick={handleMenuClose}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className={styles.navlinks} onClick={handleMenuClose}>
        <Link href="/service">
          <a>service</a>
        </Link>
      </li>
      <li className={styles.navlinks} onClick={handleMenuClose}>
        <Link href="/skills">
          <a>skills</a>
        </Link>
      </li>
      <li className={styles.navlinks} onClick={handleMenuClose}>
        <Link href="/projects">
          <a>projects</a>
        </Link>
      </li>
      <li className={styles.navlinks} onClick={handleMenuClose}>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className={styles.nav}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push("/");
            setmobilemenuopen(false);
          }}
        >
          <Image src="/logo-white.png" alt="logo" width={120} height={32} />
        </div>
        <div className={styles.menuopen} onClick={handleMenuOpen}>
          <Image src="/menu.svg" alt="menuopen" width={29} height={29} />
        </div>
        {mobilemenuopen && <MenuShow />}
      </nav>
    </>
  );
};

export default NavBar;
