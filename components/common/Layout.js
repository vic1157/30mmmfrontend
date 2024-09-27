// components/Layout.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png"; // Adjust the path as necessary

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#2c3e50', color: '#ecf0f1', minHeight: '100vh' }}>
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <Image src={logo} alt="30 Mighty Men Ministries Logo" width={100} height={100} />
        <nav style={{ marginTop: '20px' }}>
          <Link href="/" legacyBehavior>
            <a style={{ marginRight: '20px', color: '#ecf0f1' }}>Home</a>
          </Link>
          <Link href="/signin" legacyBehavior>
            <a style={{ marginRight: '20px', color: '#ecf0f1' }}>Sign In</a>
          </Link>
          <Link href="/settings" legacyBehavior>
            <a style={{ marginRight: '20px', color: '#ecf0f1' }}>Settings</a>
          </Link>
          <Link href="/foundation" legacyBehavior>
            <a style={{ color: '#ecf0f1' }}>Foundation</a>
          </Link>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
