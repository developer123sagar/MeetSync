import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import React from "react";

import { Toaster } from "@/components/ui/toaster";

import "../assets/css/globals.css";
import "../assets/css/index.css";

export const metadata: Metadata = {
  title: "dYate",
  description: "A Dating App",
};

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ptSans.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      {/* for toast message */}
      <Toaster />
      <body className="mx-auto p-2 lg:w-2/6">{children}</body>
    </html>
  );
}
