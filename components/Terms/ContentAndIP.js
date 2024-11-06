import React from "react";
import { styles } from "./styles";

export default function ContentAndIP() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>2. Content and Intellectual Property</h2>
      <h3 className={styles.subheader}>Ownership of Content</h3>
      <p className={styles.pg}>
        All content, including text, graphics, videos, and other materials
        provided by Thirty Mighty Men Ministries through the LMS, is protected
        by copyright, trademark, and other intellectual property laws. Users are
        granted a limited, non-exclusive, non-transferable license to access and
        use content solely for personal and non-commercial purposes.
      </p>
      <h3 className={styles.subheader}>User Content</h3>
      <p className={styles.pg}>
        By submitting content (such as comments, feedback, or other
        contributions) to the LMS, you grant Thirty Mighty Men Ministries a
        non-exclusive, royalty-free, perpetual, irrevocable, and sublicensable
        license to use, reproduce, distribute, and display such content in
        connection with the LMS.
      </p>
      <h3 className={styles.subheader}>Prohibited Content</h3>
      <p className={styles.pg}>
        You agree not to upload, share, or distribute content that is unlawful,
        defamatory, infringing on intellectual property rights, or otherwise
        inappropriate
      </p>
    </div>
  );
}
