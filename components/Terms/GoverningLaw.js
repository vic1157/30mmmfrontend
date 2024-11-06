import React from "react";
import { styles } from "./styles";

export default function GoverningLaw() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>8. Governing Law</h2>
      <p className={styles.pg}>
        These Terms of Service are governed by the laws of the State of
        Maryland, without regard to its conflict of law principles. Any disputes
        arising from these terms shall be resolved in the courts of Prince
        George&apos;s County, Maryland.
      </p>
    </div>
  );
}
