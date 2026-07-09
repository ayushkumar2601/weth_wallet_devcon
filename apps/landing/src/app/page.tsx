'use client';

import React, { useState } from 'react';
import {
  Box,
  ShieldCheck,
  Terminal,
  Cpu,
  Lock,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Layers,
  Code2,
} from 'lucide-react';

export default function LandingPage() {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  const copyText = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(key);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const mcpConfigSnippet = `{
  "mcpServers": {
    "weth-wallet": {
      "command": "node",
      "args": ["/path/to/weth/apps/mcp-server/dist/index.js"],
      "env": {
        "DATABASE_URL": "postgresql://weth:weth_pass@localhost:5432/weth_db?schema=public"
      }
    }
  }
}`;

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-[#09090b]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-none border border-neutral-700 bg-neutral-900 flex items-center justify-center text-white">
              <Box className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Weth</span>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-none border border-neutral-800 bg-neutral-900 text-neutral-300">
              v1.1
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#working" className="hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#download" className="hover:text-white transition-colors">
              Download &amp; Setup
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="http://localhost:3002/signing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-none font-medium text-xs transition-colors"
            >
              Open Signing Console
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 border-b border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-neutral-800 bg-neutral-900/60 text-neutral-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse" />
            ENGINEERED FOR ETHEREUM BUILD CAMP
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            AI Agents Can Think. <br />
            <span className="text-neutral-400 font-light">Only You Can Sign.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg leading-relaxed">
            Weth v1.1 bridges autonomous AI assistants with Ethereum via the Model Context Protocol. Give Claude or Cursor the power to inspect balances and draft transactions—without ever exposing your private keys.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a
              href="#download"
              className="bg-white text-black hover:bg-neutral-200 px-6 py-3 rounded-none font-semibold text-sm transition-colors"
            >
              Setup MCP Server
            </a>
            <a
              href="http://localhost:3002/signing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-none font-medium text-sm transition-colors flex items-center gap-2"
            >
              Launch Live Console
              <ExternalLink className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Minimalist Terminal Preview Block */}
          <div className="mt-12 text-left max-w-3xl mx-auto border border-neutral-800 bg-neutral-950 rounded-none overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 border-b border-neutral-800 bg-neutral-900/70 flex items-center justify-between text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>AI Agent MCP Session</span>
              </div>
              <span className="text-emerald-400 text-[11px]">&bull; ZERO-TRUST SANDBOX</span>
            </div>
            <div className="p-5 font-mono text-xs space-y-3 leading-relaxed">
              <div className="text-neutral-400">
                <span className="text-neutral-600">&gt;</span> Prompt: &ldquo;Check my Sepolia ETH balance and draft 0.01 ETH transfer to vitalik.eth if safe.&rdquo;
              </div>
              <div className="text-neutral-300">
                <span className="text-emerald-400">[MCP Tool]</span> Calling <span className="text-white">get_balance</span>(address: &quot;0x71C...E39a&quot;)...
              </div>
              <div className="text-neutral-300">
                <span className="text-emerald-400">[MCP Tool]</span> Executing <span className="text-white">simulate_transaction</span> &amp; policy evaluation...
              </div>
              <div className="p-3 border border-neutral-800 bg-neutral-900/40 rounded-none text-neutral-200">
                <span className="text-yellow-400 font-semibold">STATUS: PENDING_APPROVAL</span> &mdash; Draft #9011 staged. Requires human signature at http://localhost:3002/signing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="space-y-2">
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Core Architecture
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Why Zero-Trust Human-in-the-Loop?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-neutral-800 bg-neutral-950 p-8 rounded-none space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white rounded-none">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Zero-Trust MCP Integration</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Connect LLMs natively via the Model Context Protocol. AI agents inspect token balances, simulate EVM gas, and stage payloads inside an isolated environment.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-8 rounded-none space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white rounded-none">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Human-in-the-Loop Quarantine</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every transaction draft is held in quarantine until explicitly authorized by your cryptographic signature on the monochrome Weth web console.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-8 rounded-none space-y-4">
              <div className="w-10 h-10 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white rounded-none">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Deterministic Policy Engine</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Automated guardrails enforce maximum transfer volumes, flag unverified unlimited token approvals, and calculate quantitative risk scores before you sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING OF THE PROJECT */}
      <section id="working" className="py-24 border-b border-neutral-800 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="space-y-2">
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Execution Lifecycle
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              How Weth Works End-to-End
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Prompt AI via MCP',
                desc: 'Ask Claude or Cursor to check token balances, scan for risk, or prepare an Ethereum transfer.',
              },
              {
                step: '02',
                title: 'Sandboxed Drafting',
                desc: 'Weth simulates gas, checks spending limits, and stages a transaction draft in the database.',
              },
              {
                step: '03',
                title: 'Review in Console',
                desc: 'Open the Weth web console to inspect the destination address, wei value, and policy evaluation.',
              },
              {
                step: '04',
                title: 'Cryptographic Sign',
                desc: 'Click Approve & Sign to trigger your browser wallet and broadcast the verified transaction on-chain.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="border border-neutral-800 bg-neutral-950 p-6 rounded-none space-y-3 relative"
              >
                <div className="text-2xl font-mono font-bold text-neutral-600">{card.step}</div>
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE / DOWNLOAD */}
      <section id="download" className="py-24 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="space-y-2 text-center">
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Setup Instructions
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Download &amp; Configure MCP Server
            </h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 rounded-none space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-none bg-neutral-800 flex items-center justify-center text-xs font-mono">1</span>
                  Clone Monorepo &amp; Install Dependencies
                </h3>
                <button
                  onClick={() => copyText('clone', 'git clone https://github.com/ayushkumar2601/weth_wallet_devcon.git && cd weth_wallet_devcon && pnpm install')}
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5"
                >
                  {copiedStep === 'clone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedStep === 'clone' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-4 border border-neutral-800 bg-neutral-900/50 rounded-none text-xs font-mono text-neutral-300 overflow-x-auto">
                git clone https://github.com/ayushkumar2601/weth_wallet_devcon.git<br />
                cd weth_wallet_devcon<br />
                pnpm install
              </pre>
            </div>

            {/* Step 2 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 rounded-none space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-none bg-neutral-800 flex items-center justify-center text-xs font-mono">2</span>
                  Add Weth to Claude Desktop Config
                </h3>
                <button
                  onClick={() => copyText('mcp', mcpConfigSnippet)}
                  className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5"
                >
                  {copiedStep === 'mcp' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedStep === 'mcp' ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-4 border border-neutral-800 bg-neutral-900/50 rounded-none text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                {mcpConfigSnippet}
              </pre>
            </div>

            {/* Step 3 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6 rounded-none space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-none bg-neutral-800 flex items-center justify-center text-xs font-mono">3</span>
                Launch Services &amp; Signing Console
              </h3>
              <pre className="p-4 border border-neutral-800 bg-neutral-900/50 rounded-none text-xs font-mono text-neutral-300 overflow-x-auto">
                pnpm dev
              </pre>
              <p className="text-xs text-neutral-400">
                Opens the Weth Signing Console at <span className="text-white font-mono">http://localhost:3002</span> and boots up the API server.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 mt-auto border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            Designed and Developed by <span className="font-semibold text-white">Ayush</span> with ❤️
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ayushkumar2601/weth_wallet_devcon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="http://localhost:3002/signing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Signing Console
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
