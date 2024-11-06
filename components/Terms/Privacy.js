import React from "react";
import { styles } from "./styles";

export default function Privacy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>4. Privacy</h2>
      <p className={styles.pg}>
        Our [Privacy Policy](link to Privacy Policy) outlines how we collect,
        use, and protect user data. By using the LMS, you agree to the terms of
        our Privacy Policy.
      </p>
    </div>
  );
}
