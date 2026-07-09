import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weth v1.1 — Zero-Trust AI Agent Wallet & Signing Console",
  description: "The secure bridge between Autonomous AI Agents and On-Chain Ethereum Execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
