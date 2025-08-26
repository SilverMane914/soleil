import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const metadata: Metadata = {
  title: "Wyndham Soleil - Luxury Hotel",
  description:
    "Discover Hanoi's new stylish Upper Mid-Scale International hotel. A contemporary urban hotel for the discerning business or leisure traveler.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
