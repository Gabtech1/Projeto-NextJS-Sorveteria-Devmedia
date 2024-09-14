'use client';
import { useEffect } from "react";
import styles from "./page.module.css";
import Info from "@/components/Info";

export default function Home() {
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
          <span className={styles.letter}>S</span>
          <span className={styles.letter}>O</span>
          <span className={styles.letter}>R</span>
          <span className={styles.letter}>V</span>
          <span className={styles.letter}>E</span>
          <span className={styles.letter}>T</span>
          <span className={styles.letter}>E</span>
          <span className={styles.letter}>&nbsp;</span>
          <span className={styles.letter}>A</span>
          <span className={styles.letter}>r</span>
          <span className={styles.letter}>t</span>
          <span className={styles.letter}>e</span>
          <span className={styles.letter}>s</span>
          <span className={styles.letter}>A</span>
          <span className={styles.letter}>n</span>
          <span className={styles.letter}>A</span>
          <span className={styles.letter}>l</span>
        </h1>
      </div>
      <Info />
    </>
  );
}
