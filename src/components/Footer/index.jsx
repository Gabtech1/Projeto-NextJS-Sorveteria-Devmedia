import styles from './Footer.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.avif'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Image className={styles.logo} src={Logo} alt='Gelateria logo'/>
                <div className={styles.item}>
                    <p>ENDEREÇO</p>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className={styles.item}>
                    <p>CONTATO</p>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className={styles.item}>
                    <p>HORÁRIOS</p>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <p className={styles.copy}>Gelateria. Desenvolvido por <Link className={styles.link} href='https://gabdev.com.br/' target='__blank'>Gabdev</Link> </p>
        </footer>
    );
}