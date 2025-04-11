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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMobileMenuOpen(true);
    };
    const handleMenuClose = () => {
        setMobileMenuOpen(false);
    };
    return (
        <nav className={styles.nav}>
            <div
                className={styles.logo}
                onClick={() => {
                    router.push("/");
                    setMobileMenuOpen(false);
                }}
            >
                <Image src="/logo.svg" alt="logo" width={120} height={32} priority />
            </div>
            <div className={styles.menu_open} onClick={handleMenuOpen}>
                <Image src="/menu.svg" alt="menu_open" width={29} height={29} />
            </div>
            <ul className={mobileMenuOpen ? styles.nav_list_show : styles.nav_list_hide}>
                <div className={styles.menu_close} onClick={handleMenuClose}>
                    <Image src="/close.svg" alt="menu_close" width={25} height={25} />
                </div>
                {routes.map((route, index) => (
                    <li className={styles.nav_links} onClick={handleMenuClose} key={index}>
                        <Link href={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
