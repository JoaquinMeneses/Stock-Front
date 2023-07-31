'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock",
  description: "Gestion de stock",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modeTheme, setModeTheme] = useState("light");

  const toggleTheme = () => {
    setModeTheme(modeTheme === "light" ? "dark" : "light");
  };

  return (
    <html lang="es" className="h-screen" data-theme={modeTheme}>
      <body className="flex flex-col h-full">
        <NavBar toggleTheme={toggleTheme}/>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
