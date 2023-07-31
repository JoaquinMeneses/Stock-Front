"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import useStore from "@/store/store";

import type { Metadata } from "next";
import React, { ReactNode } from "react"; // Importamos ReactNode

export const metadata: Metadata = {
  title: "Stock",
  description: "Gestion de stock",
};

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { theme } = useStore();

  return (
    <>
      <html lang="es" className="h-screen" data-theme={theme}>
        <body className="flex flex-col h-full">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
