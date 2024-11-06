import React from "react";
import { styles } from "./styles";

export default function AcceptanceOfTerms() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>1. Acceptance of Terms</h2>
      <p className={styles.pg}>
        By accessing the LMS, you acknowledge that you have read, understood,
        and agree to abide by these Terms of Service, our Privacy Policy, and
        any other guidelines or policies we establish.
      </p>
    </div>
  );
}
