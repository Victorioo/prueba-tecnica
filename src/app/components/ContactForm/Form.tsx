"use client";
import styles from "./form.module.css";
import { useState } from "react";
import { SubmitButton } from "./components/submit-button";
// import {validateEmail, validateName, validateMessage} from './validations'
export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(email)) {
      setData({ ...data, email });
      setErrors({ ...errors, email: false });
    } else {
      setErrors({ ...errors, email: true });
    }
    // return emailRegex.test(email);
  };

  const validateName = (name: string) => {
    if (name.length > 3) {
      setData({ ...data, name });
      setErrors({ ...errors, name: false });
    } else {
      setErrors({ ...errors, name: true });
    }
    return name.length > 3;
  };

  const validateMessage = (message: string) => {
    if (message.length > 12) {
      setData({ ...data, message });
      setErrors({ ...errors, message: false });
    } else {
      setErrors({ ...errors, message: true });
    }
    return message.length > 12;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (errors.name || errors.email || errors.message) return;
  };

  return (
    <>
      <h2 className={styles.title}>Contacto</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
          <input
            className={styles.input}
            style={errors.name === true ? { border: "1px solid red" } : {}}
            type="text"
            id="name"
            name="name"
            placeholder="Nombre completo"
            onChange={(e) => validateName(e.target.value)}
          />
          {errors.name && (
            <span className={styles.error}>
              El nombre debe tener mínimo 3 caracteres
            </span>
          )}
        </div>

        <div className={styles.fieldContainer}>
          <label htmlFor="email" className={styles.label}>
            Correo
          </label>
          <input
            className={styles.input}
            style={errors.email === true ? { border: "1px solid red" } : {}}
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@gmail.com"
            onChange={(e) => validateEmail(e.target.value)}
          />
          {errors.email && (
            <span className={styles.error}>
              El email ingresado no es valido
            </span>
          )}
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            name="message"
            style={errors.message === true ? { border: "1px solid red" } : {}}
            className={styles.message}
            id="message"
            placeholder="Cuentanos que tienes en mente..."
            onChange={(e) => validateMessage(e.target.value)}
          ></textarea>
          {errors.message && (
            <span className={styles.error}>
              Tu mensaje debe tener mínimo 12 caracteres
            </span>
          )}
        </div>

        <SubmitButton style={styles.submit} />
      </form>
    </>
  );
}
