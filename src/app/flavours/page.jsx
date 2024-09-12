import Icecreams from '@/components/Icecreams';
import styles from './flavours.module.css';

export default function Flavours() {
    return (
        <>
            <div className={styles.container}>
                <h1>NOSSOS SABORES</h1>
            </div>
            <Icecreams />
        </>
    )
}