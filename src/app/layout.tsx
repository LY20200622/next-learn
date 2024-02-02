import React from "react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
          <div>AppRootLayout Title</div>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
