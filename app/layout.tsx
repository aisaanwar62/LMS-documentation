import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Sidebar from "./sidebar/page";
import Header from "./header/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.className} overflow-x-hidden`}>
        {/* Header */}
        <Header />

        <div className="flex mt-1">
          <Sidebar />
        </div>
        <NextTopLoader />

        <main className="flex-1  p-6 pt-16 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
