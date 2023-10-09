"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { StoreProvider } from "./store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <title>Frontenduppgift - Tho</title>
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
