import React from "react";
import { styles } from "./styles";

export default function Disclaimers() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        5. Disclaimers and Limitations of Liability
      </h2>
      <h className={styles.subheader}>Educational Purposes Only</h>
      <p className={styles.pg}>
        The content provided on the LMS is for educational purposes only and
        should not be construed as advice on religious, psychological, or health
        matters.
      </p>
      <h3 className={styles.subheader}>No Warranties</h3>
      <p className={styles.pg}>
        The LMS is provided “as is” without warranties of any kind, either
        express or implied, including but not limited to fitness for a
        particular purpose.
      </p>
      <h3 className={styles.subheader}>Limitation of Liability</h3>
      <p className={styles.pg}>
        Thirty Mighty Men Ministries shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages, including but
        not limited to loss of data, arising out of your access or inability to
        access the LMS.
      </p>
    </div>
  );
}
