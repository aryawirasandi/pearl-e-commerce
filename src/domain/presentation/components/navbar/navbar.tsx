'use client'
import styles from "./navbar.module.scss"
import {Home, Love} from "@/domain/presentation/components/icons";
import {usePathname} from "next/navigation";
import Link from "next/link";
export default function Navbar(){
    const path = usePathname();
    return <>
        <nav className={styles.navbar}>
            <ul className={styles.navbar__lists}>
                <li className={`${styles.navbar__item} ${path === "/" ? styles.Active : ''}`}>
                    <Link href="/">
                        <Home/>
                    </Link>
                </li>
                <li className={`${styles.navbar__item} ${path === "/product/favorite" ? styles.Active : ""}`}>
                    <Link href="/product/favorite">
                        <Love/>
                    </Link>
                </li>
            </ul>
        </nav>
    </>
}