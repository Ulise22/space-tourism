import logo from './shared/logo.svg'
import close from './shared/icon-close.svg'
import menu from './shared/icon-hamburger.svg'
import { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar () {
    const [open, setOpen] = useState(false);
    const [actualPage, setActualPage] = useState(0);

    console.log(actualPage)
    return(
        <nav className={styles.nav}>
            <Image className={styles.nav__logo} src={logo} alt='space-logo' />

            <div className={styles.nav__burguer__container} onClick={() => setOpen(!open)}>
                <Image src={open ?  close : menu} alt='icons' />
            </div>

            <span className={styles.nav__line}></span>

            <ul className={open ? `${styles.nav__menu} ${styles.activeMenu}` : `${styles.nav__menu}`}>
                <li onClick={() => setActualPage(0)}>
                    <Link
                     className={actualPage == 0 ? `${styles.nav__menu__item} ${styles.activePage}` 
                     : `${styles.nav__menu__item}`}
                      href="/"> <span>00</span> 
                        HOME 
                        </Link>
                </li>
                <li onClick={() => setActualPage(1)}>
                    <Link
                     className={actualPage == 1 ? `${styles.nav__menu__item} ${styles.activePage}` 
                     : `${styles.nav__menu__item}`}
                      href="/destination">
                         <span>01</span> 
                         DESTINATION
                         </Link>
                </li>
                <li onClick={() => setActualPage(2)}>
                    <Link
                     className={actualPage == 2 ? `${styles.nav__menu__item} ${styles.activePage}` 
                     : `${styles.nav__menu__item}`}
                      href="/crew">
                         <span>02</span> 
                         CREW
                         </Link>
                </li>
                <li  onClick={() => setActualPage(3)}>
                    <Link
                     className={actualPage == 3 ? `${styles.nav__menu__item} ${styles.activePage}` 
                     : `${styles.nav__menu__item}`}
                      href="/technology">
                         <span>03</span> 
                         TECHNOLOGY
                         </Link>
                </li>
            </ul>
        </nav>
    )
}