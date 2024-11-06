import React from "react";
import { styles } from "./styles";

export default function ContactInfo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>10. Contact Information</h2>
      <p className={styles.pg}>
        For questions or concerns about these Terms of Service, please contact
        us at:
        <br />
        Thirty Mighty Men Ministries
        <br />
        Email: [contact email]
        <br />
        Phone: [contact phone number]
      </p>
    </div>
  );
}
