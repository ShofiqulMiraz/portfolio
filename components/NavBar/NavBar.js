import styles from "./NavBar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/services",
    label: "services",
  },
  {
    path: "/skills",
    label: "skills",
  },
  {
    path: "/projects",
    label: "projects",
  },
  {
    path: "/contact",
    label: "contact",
  },
];

export default function NavBar() {
  const router = useRouter();
  const [mobilemenuopen, setmobilemenuopen] = useState(false);
  const handleMenuOpen = () => {
    setmobilemenuopen(true);
  };
  const handleMenuClose = () => {
    setmobilemenuopen(false);
  };
  return (
    <nav className={styles.nav}>
      <div
        className={styles.logo}
        onClick={() => {
          router.push("/");
          setmobilemenuopen(false);
        }}
      >
        <Image src="/navbar/logo.svg" alt="logo" width={120} height={32} />
      </div>
      <div className={styles.menuopen} onClick={handleMenuOpen}>
        <Image src="/navbar/menu.svg" alt="menuopen" width={29} height={29} />
      </div>
      <ul className={mobilemenuopen ? styles.navlistshow : styles.navlisthide}>
        <div className={styles.menuclose} onClick={handleMenuClose}>
          <Image
            src="/navbar/close.svg"
            alt="menuclose"
            width={25}
            height={25}
          />
        </div>
        {routes.map((route, index) => (
          <li className={styles.navlinks} onClick={handleMenuClose} key={index}>
            <Link href={route.path}>
              <a> {route.label} </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
