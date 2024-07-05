"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import { SubmitButton } from "./components/submit-button";
import ErrorMessage from "./components/error-message";
import Input from "./components/input";

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
      setData((prevData) => ({ ...prevData, email }));
      setErrors((prevErrors) => ({ ...prevErrors, email: false }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    }
  };

  const validateName = (name: string) => {
    if (name.length >= 3) {
      setData((prevData) => ({ ...prevData, name }));
      setErrors((prevErrors) => ({ ...prevErrors, name: false }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    }
  };

  const validateMessage = (message: string) => {
    if (message.length > 12) {
      setData((prevData) => ({ ...prevData, message }));
      setErrors((prevErrors) => ({ ...prevErrors, message: false }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, message: true }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateName(data.name);
    validateEmail(data.email);
    validateMessage(data.message);

    if (data.name && data.email && data.message) {
      setTimeout(() => {
        window.location.href = "/success";
      }, 2000);
    }
  };

  return (
    <>
      <h2 className={styles.title}>Contacto</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="name"
          type="text"
          error={errors.name}
          id="name"
          placeholder="Nombre completo"
          onChange={(e) => validateName(e)}
        />
        <ErrorMessage status={errors.name}>
          El nombre debe tener mínimo 3 caracteres
        </ErrorMessage>

        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          error={errors.email}
          placeholder="email@gmail.com"
          onChange={(e) => validateEmail(e)}
        />
        <ErrorMessage status={errors.email}>
          El email debe ser un formato válido
        </ErrorMessage>

        <div className={styles.fieldContainer}>
          <label htmlFor="message" className={styles.label}>
            Mensaje
          </label>
          <textarea
            name="message"
            className={styles.message}
            style={errors.message ? { border: "1px solid red" } : {}}
            id="message"
            placeholder="Cuéntanos qué tienes en mente..."
            onChange={(e) => validateMessage(e.target.value)}
          ></textarea>
          <ErrorMessage status={errors.message}>
            El mensaje debe tener mínimo 12 caracteres
          </ErrorMessage>
        </div>
        <SubmitButton style={styles.submit} />
      </form>
    </>
  );
}
