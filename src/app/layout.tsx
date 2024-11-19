import type { Metadata } from "next";
import React from "react";

import { Toaster } from "@/components/ui/toaster";

import "../assets/css/globals.css";
import "../assets/css/index.css";

export const metadata: Metadata = {
  title: "MeetSync",
  description: "A Dating App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      {/* for toast message */}
      <Toaster />
      <body className="mx-auto w-2/6">{children}</body>
    </html>
  );
}
