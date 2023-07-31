"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "@/components/Head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import useStore from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useStore();

  return (
    <>
      <Head />
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
