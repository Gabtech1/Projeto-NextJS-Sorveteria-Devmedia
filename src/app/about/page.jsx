import styles from './about.module.css';
import Description from '@/components/Description';

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <h1>A GELATERIA</h1>
            </div>
            <Description />
        </>
    )
}