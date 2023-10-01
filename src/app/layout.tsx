import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ApolloWrapper } from "@/lib/apollo-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitR",
  description: "FitR",
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
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}
