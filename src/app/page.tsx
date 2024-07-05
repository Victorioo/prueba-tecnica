import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import About from "./components/About/About";
import Tab from "./components/Tabs/types";
import Form from "./components/ContactForm/Form";
import Interests from "./components/Interests/Interest";

const data: Tab[] = [
  { id: 1, title: "Sobre mí", content: <About /> },
  { id: 2, title: "Intereses", content: <Interests /> },
  { id: 3, title: "Contacto", content: <Form /> },
  // { id: 3, title: "Sobre mí", },
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
