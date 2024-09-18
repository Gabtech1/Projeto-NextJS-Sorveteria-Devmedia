'use client';
import { useEffect } from "react";
import Icecreams from '@/components/Icecreams';
import styles from './flavours.module.css';


export default function Flavours() {
    /* Drop letters animation */
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
                    <span className={styles.letter}>N</span>
                    <span className={styles.letter}>O</span>
                    <span className={styles.letter}>S</span>
                    <span className={styles.letter}>S</span>
                    <span className={styles.letter}>O</span>
                    <span className={styles.letter}>S</span>
                    <span className={styles.letter}>&nbsp;</span>
                    <span className={styles.letter}>S</span>
                    <span className={styles.letter}>A</span>
                    <span className={styles.letter}>B</span>
                    <span className={styles.letter}>O</span>
                    <span className={styles.letter}>R</span>
                    <span className={styles.letter}>E</span>
                    <span className={styles.letter}>S</span>
                </h1>
            </div>
            <Icecreams />
        </>
    )
}