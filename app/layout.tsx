import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MetalHead Mechanical | Heating & Cooling — Nampa, ID",
  description:
    "MetalHead Mechanical Heating & Cooling — bold, reliable HVAC service in Nampa, Idaho. Repairs, installs, and maintenance done right.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
