import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header({
  nombre,
  img = "/defaultuser.png",
}: {
  nombre?: string;
  img?: string;
}) {
  return (
    <header className={styles.header}>
      <Image
        src={img}
        width={128}
        height={128}
        className={styles.profilePic}
        unoptimized={true}
        alt={`Fotografía del usuario ${nombre}`}
      ></Image>
      <section className={styles.section}>
        <div className={styles.info}>
          <span className={styles.name}>{nombre}</span>
          <span className={styles.bio}>
            Frontend Developer
          </span>
        </div>
        <a className={styles.link} href="#">
          Ver más
        </a>
      </section>
    </header>
  );
}
