import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./NavBar.module.scss";

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
                <Image src="/logo.svg" alt="logo" width={120} height={32} priority />
            </div>
            <div className={styles.menuopen} onClick={handleMenuOpen}>
                <Image src="/menu.svg" alt="menuopen" width={29} height={29} />
            </div>
            <ul className={mobilemenuopen ? styles.navlistshow : styles.navlisthide}>
                <div className={styles.menuclose} onClick={handleMenuClose}>
                    <Image src="/close.svg" alt="menuclose" width={25} height={25} />
                </div>
                {routes.map((route, index) => (
                    <li className={styles.navlinks} onClick={handleMenuClose} key={index}>
                        <Link href={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
