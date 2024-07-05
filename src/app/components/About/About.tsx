import styles from "./about.module.css";
export default function About() {
  return (
    <div>
      <h2 className={styles.title}>Sobre mí</h2>
      <p className={styles.bio}>
        Soy John y ser desarrollador es mi pasión. Desde joven,
        siempre me ha fascinado la tecnología y cómo funciona. Disfruto creando
        aplicaciones y soluciones que hacen la vida más fácil a las personas.
        Para mí, programar es más que escribir código; es resolver problemas y
        ver cómo mis ideas cobran vida. Me inspiran los desafíos y el
        aprendizaje constante que ofrece el desarrollo. Sueño con trabajar en
        proyectos innovadores y contribuir a la transformación digital del
        mundo.
      </p>
    </div>
  );
}
