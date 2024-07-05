import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/header";
import Tabs from "./components/Tabs/Tabs";
import About from "./components/About/About";
import { Tab } from "./components/types";

const data: Tab[] = [
  { id: 1, title: "Sobre mí"},
  { id: 2, title: "Intereses",},
  { id: 3, title: "Contacto"},
];

export default function Home() {
  return (
    
    <>
      <div className={styles.gradient}></div>
      <Header img={"/user.webp"} nombre={"John Doe"} />
      <main className={styles.main}>
        <Tabs data={data} />
      </main>
    </>
  );
}
