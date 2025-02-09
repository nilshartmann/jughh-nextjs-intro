import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import GlobalHeader from "@/components/layout/GlobalHeader";
import { NewsletterRegistration } from "@/components/NewsletterRegistration";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={"font-inter flex min-h-svh flex-col text-teal-900"}>
          <div
            className={
              "mx-auto flex w-full max-w-screen-lg items-center justify-end"
            }
          >
            <NewsletterRegistration />
          </div>
          <GlobalHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
