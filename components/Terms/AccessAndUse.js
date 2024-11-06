import React from "react";
import { styles } from "./styles";

export default function AccessAndUse() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>2. Access and Use of the LMS</h2>
      <h3 className={styles.subheader}>Eligibility</h3>
      <p className={styles.pg}>
        The LMS is intended for users aged 13 and older. Users under 18 must
        have parental or guardian consent.
      </p>
      <h3 className={styles.subheader}>Account Registration</h3>
      <p className={styles.pg}>
        You may need to register an account to access certain features. You are
        responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>
      <h3 className={styles.subheader}>Acceptable Use</h3>
      <p className={styles.pg}>
        You agree to use the LMS only for lawful purposes and in a manner
        consistent with its intended purpose as a religious and educational
        platform. Unauthorized use, including attempting to access or tamper
        with accounts other than your own, is prohibited. Also you agree to
        abide by the code of conduct written below, and also to correct behavior
        in accordance with recommendations from us, based on the biblical
        scriptures and interpretation provided.
      </p>
    </div>
  );
}
