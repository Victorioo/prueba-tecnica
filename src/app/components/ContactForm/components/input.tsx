import React from "react";
// import ErrorMessage from './ErrorMessage'; // Importa el componente ErrorMessage si no está definido globalmente
import styles from '../form.module.css'

interface InputProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
  label: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  placeholder = "",
  error = false,
  onChange,
  label,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.fieldContainer}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        style={error ? { border: "1px solid red"} : { border: ''}}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.input}
      />

    </div>
  );
};

export default Input;
