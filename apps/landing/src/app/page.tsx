'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  LockKeyhole,
  Fingerprint,
  ArrowRightCircle,
  Menu,
  X,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Terminal,
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(key);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const navLinks = [
    { label: 'Console', href: 'http://localhost:3002/signing' },
    { label: 'Features', href: '#features' },
    { label: 'Workflow', href: '#working' },
    { label: 'Setup', href: '#download' },
    { label: 'Docs', href: 'https://github.com/ayushkumar2601/weth_wallet_devcon' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const mcpSnippet = `{
  "mcpServers": {
    "weth-wallet": {
      "command": "node",
      "args": ["/path/to/weth/apps/mcp-server/dist/index.js"]
    }
  }
}`;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white text-[#192837]" style={{ fontFamily: 'var(--font-body)' }}>
      {/* FULLSCREEN HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4"
        />
        {/* Crisp Readability Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40 backdrop-blur-[1px] z-0" />

        {/* NAVBAR */}
        <header className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          {/* Logo + Brand */}
          <a href="#" className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              overflow="visible"
              viewBox="0 0 256 256"
            >
              <path
                d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
                fill="#192837"
              />
            </svg>
            <span
              className="text-2xl font-bold tracking-tight text-[#192837]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Weth
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#192837] opacity-75 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="http://localhost:3002/signing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:brightness-110"
              style={{ background: '#7342E2' }}
            >
              Start For Free
            </a>
            <a
              href="http://localhost:3002/signing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-[#192837] transition-colors hover:bg-neutral-300"
              style={{ background: '#F2F2EE' }}
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#192837] focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* HERO CONTENT CONTAINER */}
        <div
          className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 flex-1 flex flex-col justify-center"
          style={{ paddingTop: 'clamp(40px, 8vw, 72px)', paddingBottom: '60px' }}
        >
          <div className="max-w-[560px]">
            {/* HERO HEADING */}
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#192837]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.65rem, 5vw, 3rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                marginBottom: '24px',
              }}
            >
              <span className="inline-flex items-center align-middle relative -top-[2px] mr-1.5">
                <Zap className="w-6 h-6 text-[#192837]" />
              </span>
              Zero-Trust AI Agent Execution{' '}
              <span className="inline-flex items-center align-middle relative -top-[2px] mx-1">
                <LockKeyhole className="w-6 h-6 text-[#192837]" />
              </span>
              with Ironclad Ethereum Security
              <span className="inline-flex items-center align-middle relative -top-[2px] ml-1.5">
                <Fingerprint className="w-6 h-6 text-[#192837]" />
              </span>
            </motion.h1>

            {/* HERO SUBTEXT */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#192837]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                lineHeight: 1.65,
                opacity: 0.8,
                maxWidth: '560px',
                marginBottom: '36px',
              }}
            >
              Zero stress, total control. Weth keeps you covered with unbreakable Model Context Protocol drafting, human-in-the-loop signing, and pro-grade tools for your non-stop world.
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
              <motion.a
                href="http://localhost:3002/signing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-between font-semibold text-white transition-all cursor-pointer"
                style={{
                  background: '#7342E2',
                  borderRadius: '50px',
                  padding: '17px 24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  boxShadow: '0 4px 24px rgba(115, 66, 226, 0.28)',
                  minWidth: '210px',
                  gap: '32px',
                }}
              >
                <span>Launch Signing Console</span>
                <ArrowRightCircle className="w-5 h-5 shrink-0" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Subtle Bottom Accent Gradient Bar */}
        <div className="relative z-10 w-full h-1 bg-gradient-to-r from-[#7342E2] via-[#192837] to-transparent" />
      </section>

      {/* MOBILE MENU SHEET (AnimatePresence + Framer Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(25, 40, 55, 0.35)', backdropFilter: 'blur(4px)' }}
            />

            {/* Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex flex-col justify-between p-6"
              style={{
                width: 'min(88vw, 360px)',
                height: '100dvh',
                background: '#CFC8C5',
                boxShadow: '-12px 0 48px rgba(25, 40, 55, 0.18)',
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-2.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="none"
                      overflow="visible"
                      viewBox="0 0 256 256"
                    >
                      <path
                        d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
                        fill="#192837"
                      />
                    </svg>
                    <span
                      className="text-xl font-bold text-[#192837]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Weth
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-[#192837]"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* 1px Divider */}
                <div className="w-full h-px bg-[#192837]/15 my-3" />

                {/* Staggered Nav Links */}
                <nav className="flex flex-col gap-5 pt-4">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.18 + idx * 0.07, duration: 0.35 }}
                      className="text-lg font-medium text-[#192837]"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Bottom CTA Buttons matching Desktop Style */}
              <div className="flex flex-col gap-3 pt-6 border-t border-[#192837]/15">
                <a
                  href="http://localhost:3002/signing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center rounded-full text-sm font-medium text-white shadow-md"
                  style={{ background: '#7342E2' }}
                >
                  Start For Free
                </a>
                <a
                  href="http://localhost:3002/signing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center rounded-full text-sm font-medium text-[#192837]"
                  style={{ background: '#F2F2EE' }}
                >
                  Sign In
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* TASTEFUL & CLEAN LOWER SECTION (Cohesive with Helvetica Now Bold + Inter) */}
      <section id="features" className="py-24 max-w-[1280px] mx-auto px-5 sm:px-8 border-b border-neutral-200">
        <div className="space-y-3 mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#7342E2]">
            CORE ARCHITECTURE
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#192837]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Engineered for Autonomous AI Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: 'Model Context Protocol (MCP)',
              desc: 'AI agents inspect wallet balances and draft transactions in a zero-trust sandbox without ever accessing your private keys.',
            },
            {
              icon: ShieldCheck,
              title: 'Human-in-the-Loop Quarantine',
              desc: 'Every staged draft waits in pending status until reviewed and explicitly signed by your cryptographic wallet extension.',
            },
            {
              icon: Terminal,
              title: 'Automated Risk & Policy Guardrails',
              desc: 'Real-time policy engines enforce spending limits and alert you to unlimited spender allowances before signing.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-neutral-200/80 bg-[#F2F2EE]/40 hover:bg-[#F2F2EE] transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#192837] text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-xl font-bold text-[#192837]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#192837]/75 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SETUP & DOWNLOAD SECTION */}
      <section id="download" className="py-24 max-w-[1000px] mx-auto px-5 sm:px-8">
        <div className="space-y-3 mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#7342E2]">
            QUICKSTART
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#192837]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Deploy Your Local MCP Server
          </h2>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#F2F2EE] border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#192837]">Step 1: Clone Monorepo &amp; Install</div>
              <div className="text-xs text-[#192837]/70 mt-1">
                git clone https://github.com/ayushkumar2601/weth_wallet_devcon.git &amp;&amp; pnpm install
              </div>
            </div>
            <button
              onClick={() =>
                copyText(
                  'clone',
                  'git clone https://github.com/ayushkumar2601/weth_wallet_devcon.git && cd weth_wallet_devcon && pnpm install'
                )
              }
              className="px-4 py-2 rounded-full text-xs font-semibold text-white transition-transform active:scale-95 flex items-center gap-2 self-start sm:self-center"
              style={{ background: '#192837' }}
            >
              {copiedStep === 'clone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedStep === 'clone' ? 'Copied' : 'Copy Command'}
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-[#F2F2EE] border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#192837]">Step 2: Configure Claude Desktop Config</div>
              <div className="text-xs text-[#192837]/70 mt-1">
                Add Weth MCP Server JSON to ~/Library/Application Support/Claude/claude_desktop_config.json
              </div>
            </div>
            <button
              onClick={() => copyText('mcp', mcpSnippet)}
              className="px-4 py-2 rounded-full text-xs font-semibold text-white transition-transform active:scale-95 flex items-center gap-2 self-start sm:self-center"
              style={{ background: '#7342E2' }}
            >
              {copiedStep === 'mcp' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedStep === 'mcp' ? 'Copied' : 'Copy JSON'}
            </button>
          </div>
        </div>
      </section>

      {/* TASTEFUL FOOTER */}
      <footer className="w-full py-10 border-t border-neutral-200 bg-[#F2F2EE]/50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#192837]/70">
          <div>
            Designed and Developed by <span className="font-bold text-[#192837]">Ayush</span> with ❤️
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ayushkumar2601/weth_wallet_devcon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#192837] font-medium transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="http://localhost:3002/signing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#192837] font-medium transition-colors"
            >
              Signing Console
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
