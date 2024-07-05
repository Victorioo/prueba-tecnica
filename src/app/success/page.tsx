import React from 'react'
import styles from './page.module.css'
function page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.thanks}>¡Enviaste tu formulario correctamente!</h1>
      <a href="/" className={styles.return}>Volver a la página principal</a>
    </main>
  )
}

export default page