import styles from "./page.module.css";
import Info from "@/components/Info";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Sorvete artesanal</h1>
      </div>
      <Info/>
    </>
  );
}
