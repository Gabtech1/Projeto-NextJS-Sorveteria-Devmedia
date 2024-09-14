'use client';
import { useEffect } from 'react';
import styles from './about.module.css';
import Description from '@/components/Description';

export default function About() {
    useEffect(() => {
        const letters = document.querySelectorAll('h1 span');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 0.1}s`;
        });
    });

    return (
        <>
            <div className={styles.container}>
                <h1>
                    <span className={styles.letter}>A</span>
                    <span className={styles.letter}>&nbsp;</span>
                    <span className={styles.letter}>G</span>
                    <span className={styles.letter}>E</span>
                    <span className={styles.letter}>L</span>
                    <span className={styles.letter}>A</span>
                    <span className={styles.letter}>T</span>
                    <span className={styles.letter}>E</span>
                    <span className={styles.letter}>R</span>
                    <span className={styles.letter}>I</span>
                    <span className={styles.letter}>A</span>
                </h1>
            </div>
            <Description />
        </>
    )
}