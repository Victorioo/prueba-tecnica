import React from "react";
import styles from "./interest.module.css";
import Card from "./components/Card";
import { movies , music } from "@/app/utils/data";
function Interests() {
  return (
    <section className={styles.musicInterest}>
      <h2 className={styles.title}>Intereses</h2>
      <p className={styles.description}>
        {'"'}Me encanta pasar el tiempo escuchando música y viendo películas.
        Son mis pasiones favoritas para relajarme y disfrutar cada momento al
        máximo.{'"'}
      </p>
      <h2 className={styles.sectionTitle}>Albúmes favoritos</h2>
      <article className={styles.dataArticle}>
        {music.map((item, index) => (
          <Card
            type="music"
            key={index}
            title={item.title}
            author={item.author}
            image={item.image}
          />
        ))}
      </article>
      <h2 className={styles.sectionTitle}>Películas favoritas</h2>
      <article className={styles.dataArticle}>
        {movies.map((item, index) => (
          <Card
            type="movie"
            key={index}
            title={item.title}
            author={item.author}
            image={item.image}
          />
        ))}
      </article>
    </section>
  );
}

export default Interests;
