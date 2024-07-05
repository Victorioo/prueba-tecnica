// "use client";
import styles from "./form.module.css";
import { SubmitButton } from "./components/submit-button";

import {useState} from 'react'

export default function Form() {
  async function createInvoice(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  }

  return (
    <>
      <h2 className={styles.title}>Contacto</h2>
      <form action={createInvoice} className={styles.form}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
          />
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="email" className={styles.label}>
            Correo
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@gmail.com"
          />
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            name="message"
            className={styles.message}
            id="message"
            placeholder="Cuentanos que tienes en mente..."
          ></textarea>
        </div>

        <SubmitButton style={styles.submit}/>
      </form>
    </>
  );
}
