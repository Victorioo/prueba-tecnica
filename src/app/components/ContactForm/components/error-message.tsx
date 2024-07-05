import React from "react";
import styles from "../form.module.css";
function ErrorMessage({
  children,
  status,
}: {
  children: React.ReactNode;
  status: boolean;
}) {
  return (
    <span
      style={{ display: status ? "block" : "none" }}
      className={styles.error}
    >
      {children}
    </span>
  );
}

export default ErrorMessage;
