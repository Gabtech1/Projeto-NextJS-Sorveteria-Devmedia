import styles from "./page.module.css";
import Info from "@/components/Info";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>
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
      <Info />
    </>
  );
}
