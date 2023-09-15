import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = ["Home", "About", "Contact"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav items={items} />
        {children}
      </body>
    </html>
  );
}
