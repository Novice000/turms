import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { NextFont } from "next/dist/compiled/@next/font";


const inter: NextFont = Inter({ weight: "600" ,subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Turms",
  description: "loading... nothing yet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
            {children}
      </body>
    </html>
  );
}
