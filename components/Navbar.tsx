import logo from './shared/logo.svg'
import Image from 'next/image';
import styles from './Navbar.module.css';
import NavbarMenu from './NavbarMenu';

export default function Navbar () {

    return(
        <nav className={styles.nav}>
            <Image className={styles.nav__logo} src={logo} alt='space-logo' />

            <span className={styles.nav__line}></span>

            <NavbarMenu />
        </nav>
    )
}