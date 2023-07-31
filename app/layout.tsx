import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stock",
  description: "Gestion de stock",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="es" className="h-screen">
        <body className="flex flex-col h-full">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
