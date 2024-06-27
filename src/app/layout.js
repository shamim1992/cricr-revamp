import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chanrericr",
  description: "Chanre Rheumatology and Immunology Center and Research",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
   
      <body className={`${inter.className} antialiased font-serif` } style={{ fontfamily: "Taviraj" }}>{children}</body>
    </html>
  );
}
