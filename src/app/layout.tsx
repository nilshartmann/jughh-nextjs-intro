import "../globals.css";

import type { Metadata } from "next";

import GlobalHeader from "@/components/layout/GlobalHeader";

export const metadata: Metadata = {
  title: "ecolify",
  description: "Next.js Workshop Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ecolify Demo</title>
        {/*

        NOTE:
        Next.js has built-in support for both optimized Image and Font handling.
         -> In a "real" application I would consider using this built-in features
        */}
        <link href="/fonts/google-fonts.css" rel="stylesheet" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/regular.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
      </head>
      <body
        suppressHydrationWarning
        className={`flex min-h-svh flex-col overflow-y-scroll font-inter text-teal-900 antialiased`}
      >
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
