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
        unoptimized={true}
        alt={`Fotografía del usuario ${nombre}`}
      ></Image>
      
      <div>
        <span className={styles.span}> {nombre} </span>
        <a href="#">Ver más</a>
      </div>
    </header>
  );
}
