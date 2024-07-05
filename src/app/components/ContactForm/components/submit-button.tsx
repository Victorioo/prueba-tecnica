"use client";
// import { ReactNode } from "react";
// import styles from '../form.module.css'
import { useFormStatus } from "react-dom";

export function SubmitButton({ style}: { style: string}) {
  const { pending } = useFormStatus();
  

  return (
    <button type="submit" disabled={pending} className={style}>
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}
