import styles from './Header.module.css';
import Logo from '../../../public/logo.avif'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image className={styles.logo} src={Logo} alt='logo da sorveteria' />
                <nav className={styles.navbar}>
                    <Link className={styles.navlinks} href='/'>Home</Link>
                    <Link className={styles.navlinks} href='/flavours'>Sabores</Link>
                    <Link className={styles.navlinks} href='/about'>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}