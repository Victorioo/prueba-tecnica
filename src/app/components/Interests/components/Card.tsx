import styles from "../interest.module.css";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
function Card({
  title,
  author,
  image,
  type,
}: {
  title?: string;
  author?: string;
  image: StaticImport | string;
  type: string;
}) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={`Image of ${title} by ${author}`}
        width={100}
        height={100}
        unoptimized={true}
        className={type === "music" ? styles.musicImage : styles.movieImage}
      ></Image>
      <div className={styles.content}>
        <div className={styles.albumTitle}>{title}</div>
        <div className={styles.subtitle}>{author}</div>
      </div>
    </div>
  );
}

export default Card;
