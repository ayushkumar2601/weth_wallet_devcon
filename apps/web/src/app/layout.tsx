import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navigation } from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weth v1.1 - Secure AI Agent Wallet & Signing",
  description: "Minimal, tasteful, human-in-the-loop Ethereum MCP signing interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10">
              {children}
            </main>
            <footer className="w-full py-6 mt-16 border-t border-neutral-200 dark:border-neutral-900 text-center text-xs text-neutral-500 dark:text-neutral-400">
              Designed and Developed by <span className="font-semibold text-neutral-900 dark:text-neutral-100">Ayush</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
