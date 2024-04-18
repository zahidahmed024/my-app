import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toffee",
  description: "Toffee - Movies, Series & Cinema",
  keywords: ["movies", "series", "online streaming"],
  openGraph: {
    title: "Toffee",
    description: "Toffee - Movies, Series & Cinema",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
