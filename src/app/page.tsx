import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";



export default function Home() {
  return (
    <>
      <div className={styles.gradient}></div>
      <Header img={"/user.webp"} nombre={"Victorio Caccioppoli ☕"} />
      <main className={styles.main}>
        <h2>Acerca de mí</h2>
      </main>
    </>
  );
}
