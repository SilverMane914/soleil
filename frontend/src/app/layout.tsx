import { Geist, Geist_Mono } from "next/font/google";

import CssBaseline from "@mui/material/CssBaseline";

import { LayoutWrapper } from "@/components";

import type { Metadata } from "next";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soleil - Modern E-commerce",
  description:
    "A modern e-commerce platform built with Next.js and Material-UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CssBaseline />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
