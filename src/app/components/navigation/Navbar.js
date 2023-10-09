"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../page.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div
      style={{
        textTransform: "uppercase",
        width: "100%",
        background: "#1d2133",
        position: "fixed",
        zIndex: 100,
        marginBottom: "3em",
      }}
    >
      <ul
        style={{
          display: "flex",
          padding: "1.5em",
          listStyle: "none",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
          position: "sticky",
        }}
      >
        {links.map((link) => (
          <li
            key={link.label}
            style={{ padding: "10px" }}
            className={pathname === link.href ? styles.active : ""}
          >
            <Link href={link.href}>
              <p
                style={{
                  letterSpacing: "3px",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                {link.label}
              </p>
            </Link>
          </li>
        ))}

        <span
          className="material-symbols-outlined"
          style={{
            fontSize: "30px",
            paddingLeft: "20px",
            color: "white",
            position: "absolute",
            right: 0,
            cursor: "pointer",
          }}
        >
          shopping_cart
        </span>
      </ul>
    </div>
  );
}
